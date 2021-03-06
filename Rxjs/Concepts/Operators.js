import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3)
    .pipe(map((x) => x * x))
    .subscribe((v) => console.log(`value: ${v}`));

// Logs:
// value: 1
// value: 4
// value: 9
