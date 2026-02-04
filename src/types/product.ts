/**
 * Karakteristika proizvoda (npr. napon, struja, IP zaštita)
 */
export interface ProductCharacteristic {
  /** ID karakteristike */
  id: string
  /** Naziv karakteristike */
  naziv: string
  /** Vrijednost karakteristike */
  vrijednost: string
  /** Jedinica mjere (opcionalno) */
  jedinica?: string
  /** Grupa karakteristika (npr. "Električne karakteristike", "Fizičke karakteristike") */
  grupa?: string
}

/**
 * Slika proizvoda
 */
export interface ProductImage {
  /** ID slike */
  id: string
  /** URL slike */
  src: string
  /** Alt tekst */
  alt: string
  /** Je li primarna slika */
  isPrimary?: boolean
}

/**
 * Dokument proizvoda (PDF specifikacije, upute, certifikati)
 */
export interface ProductDocument {
  /** ID dokumenta */
  id: string
  /** Naziv dokumenta */
  naziv: string
  /** URL dokumenta */
  url: string
  /** Tip dokumenta */
  tip: 'datasheet' | 'manual' | 'certificate' | 'other'
  /** Veličina fajla */
  velicina?: string
}

/**
 * Recenzija proizvoda
 */
export interface ProductReview {
  /** ID recenzije */
  id: string
  /** Ime autora */
  autor: string
  /** Ocjena (1-5) */
  ocjena: number
  /** Komentar */
  komentar: string
  /** Datum recenzije */
  datum: Date
  /** Je li verificirana kupovina */
  verificiranaKupovina?: boolean
}

/**
 * Kategorija proizvoda
 */
export interface ProductCategory {
  /** ID kategorije */
  id: string
  /** Naziv kategorije */
  naziv: string
  /** Slug za URL */
  slug: string
  /** Roditeljska kategorija */
  parent?: ProductCategory
}

/**
 * Brend/Proizvođač
 */
export interface ProductBrand {
  /** ID brenda */
  id: string
  /** Naziv brenda */
  naziv: string
  /** Slug za URL */
  slug: string
  /** Logo URL */
  logo?: string
}

/**
 * Povezani proizvod (za related, recommended, alternative)
 */
export interface RelatedProduct {
  /** ID proizvoda */
  id: string
  /** Šifra proizvoda */
  sifra: string
  /** Naziv proizvoda */
  naziv: string
  /** URL slike */
  image?: string
  /** Proizvođač */
  proizvodac: string
  /** Cijena */
  cijena: number
  /** Stara cijena */
  staraCijena?: number
  /** Zaliha */
  zaliha: number
  /** Jedinica mjere */
  jedinica?: string
}

/**
 * Kompletan proizvod sa svim detaljima
 */
export interface Product {
  /** ID proizvoda */
  id: string
  /** Šifra proizvoda */
  sifra: string
  /** Naziv proizvoda */
  naziv: string
  /** Kratak opis */
  kratakOpis?: string
  /** Puni opis (HTML/Markdown) */
  opis?: string
  /** Slike proizvoda */
  slike: ProductImage[]
  /** Proizvođač/Brend */
  brend: ProductBrand
  /** Kategorija */
  kategorija: ProductCategory
  /** Trenutna cijena */
  cijena: number
  /** Stara cijena (za popuste) */
  staraCijena?: number
  /** Valuta */
  valuta: string
  /** Stanje na zalihama */
  zaliha: number
  /** Jedinica mjere */
  jedinica: string
  /** Minimalna količina za narudžbu */
  minKolicina?: number
  /** Korak količine (npr. 100 za kabele) */
  korakKolicine?: number
  /** EAN/Barkod */
  ean?: string
  /** Šifra proizvođača */
  proizvodacSifra?: string
  /** Karakteristike proizvoda */
  karakteristike: ProductCharacteristic[]
  /** Dokumenti */
  dokumenti?: ProductDocument[]
  /** Prosječna ocjena */
  prosjecnaOcjena?: number
  /** Broj recenzija */
  brojRecenzija?: number
  /** Recenzije */
  recenzije?: ProductReview[]
  /** Povezani proizvodi */
  povezaniProizvodi?: RelatedProduct[]
  /** Preporučeni proizvodi */
  preporuceniProizvodi?: RelatedProduct[]
  /** Zamjenski proizvodi */
  zamjenskiProizvodi?: RelatedProduct[]
  /** Tagovi/Ključne riječi */
  tagovi?: string[]
  /** Je li novi proizvod */
  isNew?: boolean
  /** Je li na akciji */
  isOnSale?: boolean
  /** Datum kreiranja */
  createdAt?: Date
  /** Datum ažuriranja */
  updatedAt?: Date
}
