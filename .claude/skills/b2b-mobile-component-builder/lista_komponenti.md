# LISTA SVIH KOMPONENTI ZA B2B WEB SHOP
 
## LAYOUT KOMPONENTE (Globalne)

### Header
- **Logo** - klikabilan link na homepage
- **MainNavigation** - kategorije menu/hamburger
- **SearchTrigger** - trigger dugme/input za otvaranje Search Modal-a
- **AccountDropdown** - Customer ID, avatar, logout
- **CartButton** - badge sa brojem stavki
- **ContactInfo** - telefon, email, radno vrijeme

### Footer
- **FooterColumn** - reusable kolona komponenta
- **FooterLinks** - lista linkova
- **SocialIcons** - social media ikonice
- **PaymentMethods** - ikone načina plaćanja
- **Copyright** - bottom bar

### Sidebar (za stranice sa filterima)
- **ResultsHeader** - header sa brojem pronadjenih rezultata
  - **ResultsCount** - "Pronađeno X proizvoda"
  - **ToggleFiltersButton** - "Sakrij/Prikaži sve filtere" dugme
- **SidebarContainer** - wrapper za cijeli sidebar
- **CategoryTree** - hijerarhijsko stablo kategorija sa collapse/expand
  - **CategoryTreeHeader** - header "Kategorije" sa ikonom
  - **CategoryNode** - pojedinačna kategorija (rekurzivna komponenta)
    - **CategoryCheckbox** - checkbox za selekciju
    - **CategoryLabel** - naziv kategorije
    - **CategoryCount** - broj proizvoda u zagradama (npr. "(289)")
    - **ExpandCollapseButton** - + ili - dugme za expand/collapse
    - **SubcategoryList** - lista podkategorija (nested CategoryNode komponente)
- **FiltersSection** - sekcija "Filteri"
  - **FiltersSectionHeader** - header "Filteri"
  - **FilterGroup** - wrapper za grupu filtera (npr. Dostupnost, Proizvođači)
    - **FilterGroupHeader** - header sa ikonom i nazivom
      - **FilterGroupIcon** - ikona (npr. box icon za dostupnost, factory za proizvođače)
      - **FilterGroupTitle** - naslov (npr. "Dostupnost", "Proizvođači")
      - **ExpandCollapseIcon** - chevron up/down za expand/collapse
    - **FilterGroupContent** - sadržaj filter grupe
      - **CheckboxFilter** - checkbox opcije za dostupnost
        - **Checkbox** - checkbox input
        - **FilterLabel** - label tekst (npr. "Na lageru - Zagreb")
        - **FilterCount** - broj u zagradama (npr. "(493)")
      - **ManufacturerGrid** - grid za prikaz proizvođača
        - **ManufacturerFilterCard** - kartica proizvođača
          - **ManufacturerLogo** - logo/ikona proizvođača
          - **ManufacturerName** - naziv (npr. "ABB")
          - **ManufacturerCount** - broj proizvoda (npr. "(546)")
      - **RangeFilter** - za cijenu (dual slider)
        - **RangeSlider** - slider sa dva handle-a
        - **MinInput** - min cijena input
        - **MaxInput** - max cijena input
      - **SeriesFilter** - checkbox lista serija (slično kao dostupnost)
- **ActiveFiltersChips** - prikaz aktivnih filtera (sticky na vrhu rezultata)
  - **FilterChip** - pojedinačni aktivni filter sa X dugmetom
    - **ChipLabel** - tekst filtera
    - **RemoveButton** - X dugme
  - **ClearAllFilters** - "Obriši sve filtere" dugme

### Search Modal
- **SearchModal** - full screen overlay modal (otvara se klikom na SearchTrigger)
- **SearchModalOverlay** - backdrop/pozadina
- **SearchModalContent** - glavni content container
- **SearchModalHeader** - header sa close dugmetom
  - **SearchModalInput** - large search input sa autocomplete i instant search
  - **CloseModalButton** - X dugme za zatvaranje
- **SearchModalBody** - scrollable body sa rezultatima
  - **SearchResultsTabs** - tab navigacija (Proizvodi, Kategorije, Proizvođači, Serije)
  - **SearchResultsSection** - sekcija rezultata po tipu
    - **SectionHeader** - header sa nazivom sekcije i brojem rezultata
    - **ProductSearchResult** - mini kartica proizvoda
      - **ProductSearchImage** - thumbnail slika
      - **ProductSearchInfo** - naziv, šifra, proizvođač
      - **ProductSearchPrice** - cijena
      - **ProductSearchStock** - dostupnost badge
      - **QuickAddButton** - brzo dodaj u cart
    - **CategorySearchResult** - kartica kategorije
      - **CategoryIcon** - ikona kategorije
      - **CategoryName** - naziv
      - **CategoryProductCount** - broj proizvoda u kategoriji
    - **ManufacturerSearchResult** - kartica proizvođača
      - **ManufacturerSearchLogo** - logo
      - **ManufacturerSearchName** - naziv
      - **ManufacturerProductCount** - broj proizvoda
    - **SeriesSearchResult** - kartica serije
      - **SeriesSearchName** - naziv serije
      - **SeriesManufacturer** - proizvođač serije
      - **SeriesProductCount** - broj proizvoda
    - **SeeAllResultsButton** - link za sve rezultate tog tipa
- **SearchEmptyState** - prikaz kad je search prazan (prije nego što korisnik ukuca)
  - **RecentSearches** - nedavne pretrage korisnika
    - **RecentSearchItem** - pojedinačna pretraga
      - **SearchIcon** - ikona
      - **SearchQuery** - tekst pretrage
      - **DeleteSearchButton** - X dugme za brisanje iz historije
  - **TrendingSearches** - popularne/trending pretrage
    - **TrendingSearchItem** - clickable pretraga
      - **TrendingIcon** - trending ikona
      - **TrendingQuery** - tekst
- **NoResultsState** - prikaz kad nema rezultata za upit
  - **NoResultsIcon** - ikona
  - **NoResultsMessage** - poruka
  - **SearchSuggestions** - prijedlozi za poboljšanje pretrage
- **SearchModalFooter** - footer sa keyboard shortcuts info
  - **KeyboardShortcuts** - prikaz shortcut-a (ESC - close, ↑↓ - navigate, Enter - select)

---

## 1. HOMEPAGE / DASHBOARD

### Hero/Banner sekcija
- **HeroBanner** - glavni banner sa pozivom na akciju
- **PromoSlider** - carousel za akcije/novosti

### Dashboard sekcije
- **QuickActions** - kartica sa dugmadima (Nove narudžbe, Ponovi, Preuzmi račune)
- **RecentlyViewedSection** - kartica sa listom proizvoda
  - **ProductCardMini** - kompaktniji prikaz proizvoda
- **RecommendedSection** - preporučeni proizvodi
  - **ProductCard** - standardna kartica proizvoda
- **FrequentlyBoughtSection** - često kupljeni proizvodi
- **SpecialOffersSection** - akcije i ponude
  - **OfferCard** - kartica akcije sa countdown timerom
- **RecentOrdersSection** - nedavne narudžbe
  - **OrderCard** - kartica sa order preview
- **NotificationsSection** - obavijesti
  - **NotificationItem** - pojedinačna obavijest (icon, text, timestamp)

---

## 2. STRANICA REZULTATA PRETRAGE / PRODUCTS

### Toolbar
- **SearchResultsHeader** - broj rezultata, breadcrumbs
- **ViewToggle** - grid/list view switch
- **SortDropdown** - sortiranje (cijena, naziv, dostupnost)

### Product List
- **ProductGrid** - grid container za kartice
- **ProductList** - list container (alternativa gridu)
- **ProductCard** - kartica proizvoda
  - **ProductImage** - slika sa lazy loading
  - **ProductBadge** - oznake (Akcija, Novo, Dostupno)
  - **ProductTitle** - naziv proizvoda
  - **ProductSKU** - šifra proizvoda
  - **ProductManufacturer** - logo/naziv proizvođača
  - **ProductPrice** - cijena (neto/bruto toggle)
  - **StockStatus** - dostupnost (badge sa bojom)
  - **QuantityInput** - input sa +/- dugmadima
  - **AddToCartButton** - dodaj u košaricu
  - **WishlistButton** - srce icon za wishlist
- **Pagination** - navigacija kroz stranice
- **LoadMoreButton** - alternativa paginaciji

---

## 3. PRODUCT DETAILS PAGE

### Product Info
- **Breadcrumbs** - navigacijski path
- **ProductGallery** - galerija slika
  - **MainImage** - velika slika
  - **ThumbnailCarousel** - mini slike (klikabilne)
  - **ZoomModal** - zoom funkcionalnost
- **ProductInfoCard** - glavne informacije
  - **ProductTitle**
  - **ProductSKU**
  - **ManufacturerBadge** - logo proizvođača
  - **SeriesBadge** - naziv serije
  - **ProductRating** - zvijezdice (ako ima reviews)
- **PriceCard** - cijena sa toggle neto/bruto
  - **PriceDisplay** - prikazan iznos
  - **TaxToggle** - switch neto/bruto
  - **DiscountBadge** - ako ima popust
- **StockCard** - dostupnost
  - **StockStatusBadge**
  - **DeliveryEstimate** - procjena dostave
- **AddToCartSection**
  - **QuantityInput**
  - **AddToCartButton** (large)
  - **WishlistButton**
  - **CompareButton** - dodaj u poređenje

### Product Details Tabs
- **TabNavigation** - tab header (Opis, Specifikacije, Dokumenti, Recenzije)
- **DescriptionTab** - HTML content opis proizvoda
- **SpecificationsTab** - tehničke spec
  - **SpecsTable** - tabela sa key/value
- **DocumentsTab** - PDF katalozi
  - **DocumentList** - lista dokumenata
  - **DocumentItem** - pojedinačni dokument (icon, naziv, size, download)
- **ReviewsTab** - recenzije (ako ima)
  - **ReviewList**
  - **ReviewItem**

### Related Products
- **RelatedProductsSection** - "Slični proizvodi"
  - **ProductCarousel** - horizontal scroll
  - **ProductCardMini**
- **FrequentlyBoughtSection** - "Često kupljeni zajedno"
  - **BundleCard** - kartica sa više proizvoda

---

## 4. MANUFACTURERS PAGE

### Manufacturers Grid
- **ManufacturersGrid** - grid container
- **ManufacturerCard** - kartica proizvođača
  - **ManufacturerLogo** - logo
  - **ManufacturerName** - naziv
  - **ProductCount** - broj proizvoda
  - **ViewButton** - link ka stranici

### Filters
- **SearchManufacturers** - search input za brzu pretragu
- **AlphabetFilter** - A-Z filter dugmad

---

## 5. MANUFACTURER DETAIL PAGE

### Manufacturer Header
- **ManufacturerBanner** - hero sekcija
  - **ManufacturerLogo** (large)
  - **ManufacturerInfo** - opis, website link, katalozi
  - **DownloadCatalogButton**

### Series Section
- **SeriesGrid** - grid serija tog proizvođača
- **SeriesCard** - kartica serije
  - **SeriesName**
  - **ProductCount**

### Products Section
- **ProductGrid** (reuse from search page)
- **Sidebar** sa filterima (reuse)

---

## 6. SERIES PAGE

### Series Grid
- **SeriesGrid** - grid container
- **SeriesCard** - kartica serije
  - **SeriesName** - naziv
  - **ManufacturerBadge** - proizvođač
  - **ProductCount** - broj proizvoda
  - **SeriesImage** - reprezentativna slika (optional)

---

## 7. SERIES DETAIL PAGE

### Series Header
- **SeriesBanner** - info o seriji
  - **SeriesName** (large)
  - **ManufacturerLogo**
  - **SeriesDescription**

### Products Section
- **ProductGrid** (reuse)
- **Sidebar** sa filterima (reuse)

---

## 8. SHOPPING CART PAGE

### Cart Table
- **CartTable** - tabela stavki
  - **CartTableHeader** - header reda (Slika, Naziv, Šifra, Cijena, Količina, Subtotal, Akcije)
  - **CartTableRow** - red sa stavkom
    - **CartItemImage** - thumbnail
    - **CartItemInfo** - naziv + šifra + proizvođač
    - **CartItemPrice** - jedinična cijena
    - **CartItemQuantity** - **QuantityInput** sa update
    - **CartItemSubtotal** - ukupno za stavku
    - **RemoveButton** - X dugme za brisanje
- **EmptyCart** - prikaz kad je košarica prazna
  - **EmptyStateIcon**
  - **EmptyStateMessage**
  - **ContinueShoppingButton**

### Cart Summary
- **CartSummaryCard** - sticky card sa desne strane
  - **SubtotalRow** - subtotal
  - **TaxRow** - PDV
  - **TotalRow** - ukupno (bold)
  - **PromoCodeInput** - input + apply dugme
  - **CheckoutButton** (large, primary)
  - **ContinueShoppingButton** (secondary)

### Recommended Products
- **RecommendedSection** - "Možda vas zanima"
  - **ProductCarousel**

---

## 9. CHECKOUT PAGE

### Checkout Layout
- **CheckoutStepper** - step indicator (1. Dostava, 2. Plaćanje, 3. Pregled)
- **CheckoutForm** - glavni form

### Step 1: Shipping
- **ShippingAddressForm**
  - **AddressSelect** - dropdown postojećih adresa
  - **AddNewAddressButton**
  - **AddressFields** - input fields (Ime, Prezime, Adresa, Grad, Poštanski broj, Država, Telefon)
- **ShippingMethodSelect** - radio buttons za način dostave
  - **ShippingOptionCard** - kartica sa cijenom i procjenom

### Step 2: Payment
- **BillingAddressToggle** - "Ista kao shipping" checkbox
- **BillingAddressForm** - (ako nije ista)
- **PaymentMethodSelect** - radio buttons
  - **PaymentOptionCard** - kartica sa ikonom (Virman, Kartica, Gotovina)
- **CardPaymentForm** - ako je kartica (Card number, Expiry, CVV)

### Step 3: Review
- **OrderReviewSummary** - pregled cijele narudžbe
  - **ShippingAddressDisplay** - readonly prikaz
  - **BillingAddressDisplay**
  - **ShippingMethodDisplay**
  - **PaymentMethodDisplay**
  - **OrderItemsList** - lista proizvoda (readonly)
  - **OrderTotalSummary** - subtotal, shipping, tax, total
- **OrderNotesTextarea** - napomene za narudžbu
- **TermsCheckbox** - prihvati uslove
- **PlaceOrderButton** (large, primary)

### Order Summary Sidebar
- **OrderSummarySidebar** - sticky sidebar sa desne strane
  - **OrderItemsMini** - mini prikaz stavki
  - **OrderTotalCard** - ukupan iznos

---

## 10. ORDER CONFIRMATION PAGE

- **ConfirmationHero** - uspješna narudžba hero
  - **SuccessIcon** - checkmark icon (large)
  - **ThankYouMessage**
  - **OrderNumber** - bold, veliki
  - **OrderDate**
- **OrderDetailsCard** - detalji narudžbe
  - **OrderItemsList** - lista proizvoda
  - **OrderTotalSummary**
  - **ShippingInfo** - adresa i način dostave
  - **PaymentInfo** - način plaćanja
- **NextStepsCard** - šta dalje
  - **TrackingInfo** - tracking broj (ako dostupno)
  - **EstimatedDelivery** - procjena dostave
  - **DownloadInvoiceButton** - PDF download
  - **PrintButton** - print narudžbe
- **ContinueShoppingButton**

---

## 11. USER ACCOUNT PAGES

### Account Layout (za sve account stranice)
- **AccountLayout** - wrapper
  - **AccountSidebar** - leva navigacija
    - **AccountMenu** - lista linkova
      - **AccountMenuItem** - pojedinačni link sa ikonom
  - **AccountContent** - glavna content area

### 11a. Login / Register
- **LoginForm**
  - **EmailInput**
  - **PasswordInput**
  - **RememberMeCheckbox**
  - **LoginButton**
  - **ForgotPasswordLink**
- **RegisterForm**
  - **CompanyInfoFields** - Naziv firme, PIB, PDV broj
  - **ContactFields** - Ime, Prezime, Email, Telefon
  - **AddressFields**
  - **PasswordFields** - lozinka + potvrda
  - **TermsCheckbox**
  - **RegisterButton**
- **SocialLogin** - Google/Facebook login dugmad (optional)
- **DividerWithText** - "ili" separator

### 11b. My Account Dashboard / Moj račun
- **DashboardStats** - statistike
  - **StatCard** - kartica sa brojem (Aktivne narudžbe, Ukupna potrošnja)
- **QuickActionsGrid**
  - **QuickActionCard** - kartica sa ikonom i akcijom
- **RecentOrdersList** - liste nedavnih narudžbi
  - **OrderCardMini**

### 11c. Promjena lozinke
- **ChangePasswordForm**
  - **CurrentPasswordInput**
  - **NewPasswordInput**
  - **ConfirmPasswordInput**
  - **PasswordStrengthIndicator** - progress bar za jačinu lozinke
  - **SubmitButton**

### 11d. Moji proizvodi
- **MyProductsGrid** - grid proizvoda
- **ProductCard** (reuse sa special pricing indicator)
- **SpecialPriceTag** - oznaka specijalne cijene

### 11e. Zadnje pogledano
- **RecentlyViewedList**
  - **ProductCard** sa timestamp
- **ClearHistoryButton**

### 11f. Često naručeno
- **FrequentlyOrderedList**
  - **FrequentProductCard** - sa brojem puta naručeno
  - **QuickReorderButton**

### 11g. Moji dokumenti
- **DocumentsGrid** - grid dokumenata
  - **DocumentCard** - kartica dokumenta
    - **DocumentIcon** - icon based on type (PDF, Excel, etc.)
    - **DocumentName**
    - **DocumentMeta** - size, date uploaded
    - **DownloadButton**
    - **PreviewButton** (optional)
- **UploadDocumentButton** - dugme za upload
- **DocumentFilters** - filter po tipu dokumenta

### 11h. Nalozi / Order History
- **OrdersTable** - tabela narudžbi
  - **OrdersTableHeader** - Datum, Broj, Status, Ukupno, Akcije
  - **OrdersTableRow**
    - **OrderDate**
    - **OrderNumber** - link ka detaljima
    - **OrderStatusBadge** - badge sa bojom based on status
    - **OrderTotal**
    - **OrderActions** - dropdown sa akcijama (View, Reorder, Download invoice)
- **OrdersFilters**
  - **DateRangePicker**
  - **StatusFilter** - dropdown

### 11i. Order Details
- **OrderDetailsHeader**
  - **OrderNumber** (large)
  - **OrderDate**
  - **OrderStatusBadge**
  - **DownloadInvoiceButton**
  - **PrintButton**
- **OrderItemsTable** - tabela proizvoda u narudžbi
- **OrderTotalSummary**
- **ShippingInfoCard** - adresa i način dostave
- **PaymentInfoCard** - način plaćanja
- **TrackingInfoCard** - tracking broj i status (ako dostupno)
  - **TrackingTimeline** - timeline sa koracima dostave
- **ReorderButton** - ponovi ovu narudžbu

### 11j. Ponude / Quotes
- **QuotesTable** - tabela ponuda
  - **QuotesTableRow**
    - **QuoteNumber**
    - **QuoteDate**
    - **QuoteStatusBadge** (Draft, Poslano, Prihvaćeno, Odbijeno, Isteklo)
    - **QuoteTotal**
    - **QuoteActions** - (View, Edit, Convert to Order, Download PDF)
- **CreateQuoteButton** - nova ponuda
- **QuoteFilters**

### 11k. Otpremnice / Delivery Notes
- **DeliveryNotesTable** - tabela otpremnica
  - **DeliveryNoteRow**
    - **DeliveryNoteNumber**
    - **DeliveryDate**
    - **RelatedOrderNumber** - link na order
    - **TrackingNumber**
    - **StatusBadge**
    - **DownloadButton**

### 11l. Moji računi / Invoices
- **InvoicesTable** - tabela računa
  - **InvoiceRow**
    - **InvoiceNumber**
    - **InvoiceDate**
    - **InvoiceAmount**
    - **PaymentStatusBadge** (Plaćeno/Neplaćeno)
    - **DueDateDisplay** - rok plaćanja
    - **DownloadButton**
- **InvoiceFilters**
  - **DateRangePicker**
  - **PaymentStatusFilter**

### 11m. Profile / Podaci o korisniku
- **ProfileForm**
  - **PersonalInfoSection**
    - **FirstNameInput**
    - **LastNameInput**
    - **EmailInput**
    - **PhoneInput**
  - **CompanyInfoSection**
    - **CompanyNameInput**
    - **PIBInput** - PIB broj
    - **PDVInput** - PDV broj
  - **NotificationPreferences**
    - **EmailNotificationsToggle** - switches za razne notifikacije
  - **SaveButton**

### 11n. Address Book
- **AddressBookGrid** - grid adresa
  - **AddressCard** - kartica adrese
    - **AddressType** - badge (Shipping/Billing)
    - **AddressDetails** - prikaz adrese
    - **DefaultBadge** - "Glavna adresa" ako je default
    - **EditButton**
    - **DeleteButton**
    - **SetAsDefaultButton**
- **AddAddressButton** - dodaj novu adresu
- **AddressModal** - modal za dodavanje/editovanje
  - **AddressForm**

### 11o. Wishlist
- **WishlistGrid** - grid proizvoda
  - **ProductCard** (reuse)
  - **RemoveFromWishlistButton**
  - **AddToCartButton**
- **EmptyWishlist** - kad je prazan
  - **EmptyStateMessage**
  - **BrowseProductsButton**

---

## 12. STATIC PAGES

### O nama / About
- **AboutHero** - hero sekcija
- **CompanyStorySection** - tekst sa slikama
- **TeamSection** - grid članova tima
  - **TeamMemberCard** - slika, ime, pozicija
- **ValuesSection** - vrijednosti kompanije

### Kontakt
- **ContactHero**
- **ContactForm**
  - **NameInput**
  - **EmailInput**
  - **SubjectInput**
  - **MessageTextarea**
  - **SendButton**
- **ContactInfoSection** - adresa, telefon, email, mapa
- **MapEmbed** - Google Maps

### FAQ
- **FAQHero**
- **FAQCategories** - tabovi/sekcije kategorija
- **FAQAccordion** - accordion lista pitanja
  - **FAQItem** - pitanje + odgovor (collapse/expand)
- **SearchFAQ** - search input

### Uslovi korištenja / Politika privatnosti
- **LegalPageLayout**
  - **LegalContent** - formatiran tekst sa headings
  - **TableOfContents** - sidebar sa TOC
  - **LastUpdated** - datum posljednje izmjene

---

## SHARED/UTILITY KOMPONENTE

### Buttons
- **Button** - base button (variants: primary, secondary, outline, ghost, danger)
- **IconButton** - dugme sa samo ikonom
- **LoadingButton** - button sa loading spinner
- **FloatingActionButton** - FAB (npr. za scroll to top)

### Forms
- **Input** - text input
- **Textarea** - multi-line input
- **Select** - dropdown select
- **Checkbox** - checkbox input
- **Radio** - radio button
- **Switch** - toggle switch
- **DatePicker** - date picker
- **DateRangePicker** - range picker
- **FileUpload** - file upload sa drag & drop
- **FormLabel** - label za form fields
- **FormError** - error message display
- **FormHelperText** - helper tekst ispod inputa

### Navigation
- **Breadcrumbs** - breadcrumb navigacija
- **Pagination** - paginacija
- **Tabs** - tab navigacija
- **Dropdown** - dropdown menu
- **MegaMenu** - mega menu za kategorije

### Data Display
- **Table** - base table komponenta
- **Card** - base card komponenta
- **Badge** - badge/tag
- **Chip** - chip sa X dugmetom
- **Avatar** - avatar slika
- **Divider** - separator linija
- **Tooltip** - tooltip on hover
- **Accordion** - accordion/collapse
- **Timeline** - timeline display

### Feedback
- **Alert** - alert message (success, error, warning, info)
- **Toast** - toast notification
- **Modal** - modal dialog
- **ConfirmDialog** - potvrda akcije
- **LoadingSpinner** - spinner
- **Skeleton** - skeleton loader
- **ProgressBar** - progress bar
- **EmptyState** - empty state prikaz

### Media
- **Image** - optimized image component
- **ImageGallery** - galerija slika
- **Carousel** - carousel/slider
- **VideoPlayer** - video player (optional)

### Icons
- **Icon** - wrapper za ikonice (lucide-react ili heroicons)
- Specifične ikonice: Cart, User, Search, Heart, ChevronDown, Close, Check, Star, Package, Truck, CreditCard, etc.

### Layout
- **Container** - max-width container
- **Grid** - responsive grid
- **Stack** - vertical/horizontal stack
- **Spacer** - spacing component

---

## KOMPONENTI PO KATEGORIJAMA

**Layout (Header, Footer):** 15 komponenti
**Sidebar & Filters:** 28 komponenti
**Search Modal:** 38 komponenti
**Homepage/Dashboard:** 12 komponenti
**Search/Products:** 20 komponenti
**Product Details:** 25 komponenti
**Manufacturers/Series:** 10 komponenti
**Cart:** 12 komponenti
**Checkout:** 20 komponenti
**User Account:** 50+ komponenti
**Static Pages:** 15 komponenti
**Shared/Utility:** 40+ komponenti

**UKUPNO: ~285+ komponenti**

---

## NAPOMENE

1. Mnoge komponente su **reusable** - npr. ProductCard se koristi na više stranica
2. Komponente su organizovane **hijerarhijski** - veće komponente sadrže manje
3. Svaka komponenta treba biti **samostalna** sa jasnim props interface-om
4. Komponente treba grupisati po **feature folderu** (npr. `/components/product/`, `/components/cart/`, `/components/account/`)
5. Shared komponente idu u `/components/shared/` ili `/components/ui/`
6. Svaka komponenta treba imati **TypeScript tipove** za props
7. Koristiti **Tailwind CSS** za styling
8. Komponente treba da budu **responsive** (mobile-first)
9. Implementirati **accessibility** (ARIA labels, keyboard navigation)
10. Dodati **loading states**, **error states**, i **empty states** gdje je potrebno
