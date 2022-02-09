interface IPokemonStats {
  pvMax: number;
  ataque: number;
  defesa: number;
  ataque_especial: number;
  defesa_especial: number;
  velocidade: number;
}

export class Pokemon {
  readonly id: number;
  readonly name: string;
  readonly stats: IPokemonStats;
  readonly image: string;
  readonly type1: string;
  readonly type2: string | undefined;
  readonly height: number;
  readonly weight: number;

  constructor(
    id: number,
    name: string,
    stats: IPokemonStats,
    image: string,
    type1: string,
    type2: string | undefined,
    height: number,
    weight: number
  ) {
    this.id = id;
    this.name = name;
    this.stats = stats;
    this.image = image;
    this.type1 = type1;
    this.type2 = type2;
    this.height = height;
    this.weight = weight;
  }
}
