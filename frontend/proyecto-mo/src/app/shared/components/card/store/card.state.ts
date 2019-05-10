import { Store, Action, StateContext, State, Selector } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { CardService } from '../services/card.service';
import { Cards } from 'src/app/shared/shared.models';
import { GetPacksSuccess, GetPacksFailed, GetPacks } from './card.actions';


@State<Cards>({
  name: 'cards',
  defaults: {
    packs: [],
    products: []
  }
})
export class CardsState {
  constructor(
    private cardService: CardService,
    private store: Store
  ) { }

  @Selector()
  static getPacks({ packs }: Cards) {
    return packs;
  }

  @Action(GetPacks)
  getPacks({ dispatch }: StateContext<Cards>) {
    return this.cardService.getPacks().pipe(
      tap(packs => dispatch(new GetPacksSuccess(packs))),
      catchError(error => dispatch(new GetPacksFailed(error.error)))
    )
  }

  @Action(GetPacksSuccess)
  getPacksSuccess({ patchState }: StateContext<Cards>, { packs }: GetPacksSuccess) {
    patchState({ packs })
  }
  @Action(GetPacksFailed)
  errors({ dispatch }: StateContext<Cards>, { errors }: any) {
    console.error(errors)
  }
}