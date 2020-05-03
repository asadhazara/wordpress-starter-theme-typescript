import { defer } from 'rxjs';
import { pluck, shareReplay } from 'rxjs/operators';

export const animejs$ = defer(() =>
  import(/* webpackPrefetch: true */ /* webpackChunkName: "animejs" */ 'animejs')
).pipe(pluck('default'), shareReplay(1));
