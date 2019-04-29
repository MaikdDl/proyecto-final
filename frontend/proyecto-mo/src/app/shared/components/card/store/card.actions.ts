import { Card } from 'src/app/shared/shared.models';

export class GetPacks {
  static readonly type = '[Card] GetPacks';
  constructor() { }
}

export class GetPacksSuccess {
  static readonly type = '[Card] GetPacksSuccess';
  constructor(public packs: Card[]) { }
}

export class GetPacksFailed {
  static readonly type = '[Card] GetPacksFailed';
  constructor(public errors: Error[]) { }
}