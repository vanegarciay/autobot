import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CarsService } from '../../core/cars.service';
import { GlobalStoreService } from '../../core/global-store.service';
import { Car } from '../../core/store/models/car.model';
import { DisplayService } from '../display.service';
import { EngineService } from '../engine.service';
import { Indicator } from '../store/models/indicator.model';
import { TravelsService } from '../travels.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CarComponent implements OnInit, OnDestroy {
  public car: Car;
  public indicators: Indicator[];
  private subscription: Subscription;
  private hasPendingChanges = undefined;

  constructor(
    private route: ActivatedRoute,
    private cars: CarsService,
    private display: DisplayService,
    private engine: EngineService,
    private travels: TravelsService,
    private globalStore: GlobalStoreService
  ) {}

  public ngOnInit() {
    this.subscription = this.route.params
      .pipe(
        map((params: Params): string => params['carId']),
        switchMap((carId: string): Observable<Car> => this.cars.getCarByLinkId$(carId)),
        tap(this.onCarGotten),
        switchMap((car: Car): Observable<Car> => this.travels.getCarTravel$(car)),
        switchMap((car: Car): Observable<number> => interval(environment.refreshInterval))
      )
      .subscribe(this.timeGoesBy);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  public canBeDeactivated() {
    if (this.hasPendingChanges !== undefined) {
      if (this.hasPendingChanges) {
        this.globalStore.dispatchUserMessage('Save or delete before travel !!');
      } else {
        this.globalStore.dispatchUserMessage('You can travel away ;-)');
      }
    }
    return !this.hasPendingChanges;
  }

  public onBrake = (): void => {
    this.hasPendingChanges = true;
    this.engine.brake(this.car);
  };
  public onThrottle = (): void => {
    this.hasPendingChanges = true;
    this.engine.throttle(this.car);
  };
  public onRecharge = (rechargedDistance: number): void => this.engine.recharge(rechargedDistance, this.car);
  public onSaveTravel = () =>
    this.travels.putCarTravel$(this.car).subscribe(null, null, () => (this.hasPendingChanges = false));
  public onDeleteTravel = () =>
    this.travels.deleteCarTravel$(this.car).subscribe(null, null, () => (this.hasPendingChanges = false));

  public hasBattery = (): boolean => this.engine.hasBattery(this.car);
  public isBrakeDisabled = (): boolean => this.engine.isBrakeDisabled(this.car);
  public isThrottleDisabled = (): boolean => this.engine.isThrottleDisabled(this.car);

  private onCarGotten = (car: Car): void => {
    this.car = car;
    this.indicators = this.display.initilizeIndicators(this.car);
  };
  private timeGoesBy = (intervalNumber: number): void => {
    this.engine.checkBattery(this.car);
    this.indicators = this.display.updateIndicators(this.car);
  };
}
