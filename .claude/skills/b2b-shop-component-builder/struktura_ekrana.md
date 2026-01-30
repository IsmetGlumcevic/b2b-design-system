# STRUKTURA EKRANA I KOMPONENTI - B2B WEB SHOP
 
Ova datoteka prikazuje hijerarhijsku strukturu svih stranica i njihovih komponenti. Vizualizacija pokazuje kako su komponente nested i organizovane.

---

## GLOBALNE KOMPONENTE (prisutne na svim stranicama)

### Header (sticky, top)
```
Header
├── Logo
├── MainNavigation (hamburger menu)
├── SearchTrigger (otvara SearchModal)
├── AccountDropdown
│   ├── CustomerID display
│   ├── Avatar
│   └── Logout button
├── CartButton
│   └── Badge (broj stavki)
└── ContactInfo
    ├── Phone
    ├── Email
    └── WorkingHours
```

### Footer (bottom)
```
Footer
├── FooterColumn #1 (O nama)
│   └── FooterLinks
├── FooterColumn #2 (Korisnički servis)
│   └── FooterLinks
├── FooterColumn #3 (Informacije)
│   └── FooterLinks
├── FooterColumn #4 (Moj račun)
│   └── FooterLinks
├── FooterColumn #5 (Kontakt)
│   ├── Address
│   ├── Phone
│   ├── Email
│   └── SocialIcons
└── Copyright
    ├── CopyrightText
    └── PaymentMethods
```

### Search Modal (globalno - otvara se iz bilo gdje)
```
SearchModal
├── SearchModalOverlay (backdrop)
└── SearchModalContent
    ├── SearchModalHeader
    │   ├── SearchModalInput (large, autofocus)
    │   └── CloseModalButton
    ├── SearchModalBody
    │   ├── SearchResultsTabs
    │   │   ├── Tab: Proizvodi
    │   │   ├── Tab: Kategorije
    │   │   ├── Tab: Proizvođači
    │   │   └── Tab: Serije
    │   ├── SearchResultsSection (Proizvodi)
    │   │   ├── SectionHeader
    │   │   ├── ProductSearchResult (multiple)
    │   │   │   ├── ProductSearchImage
    │   │   │   ├── ProductSearchInfo
    │   │   │   │   ├── ProductTitle
    │   │   │   │   ├── ProductSKU
    │   │   │   │   └── ManufacturerName
    │   │   │   ├── ProductSearchPrice
    │   │   │   ├── ProductSearchStock
    │   │   │   └── QuickAddButton
    │   │   └── SeeAllResultsButton
    │   ├── SearchResultsSection (Kategorije)
    │   │   ├── SectionHeader
    │   │   ├── CategorySearchResult (multiple)
    │   │   │   ├── CategoryIcon
    │   │   │   ├── CategoryName
    │   │   │   └── CategoryProductCount
    │   │   └── SeeAllResultsButton
    │   ├── SearchResultsSection (Proizvođači)
    │   │   ├── SectionHeader
    │   │   ├── ManufacturerSearchResult (multiple)
    │   │   │   ├── ManufacturerSearchLogo
    │   │   │   ├── ManufacturerSearchName
    │   │   │   └── ManufacturerProductCount
    │   │   └── SeeAllResultsButton
    │   ├── SearchResultsSection (Serije)
    │   │   ├── SectionHeader
    │   │   ├── SeriesSearchResult (multiple)
    │   │   │   ├── SeriesSearchName
    │   │   │   ├── SeriesManufacturer
    │   │   │   └── SeriesProductCount
    │   │   └── SeeAllResultsButton
    │   ├── SearchEmptyState (prikazuje se kad je input prazan)
    │   │   ├── RecentSearches
    │   │   │   └── RecentSearchItem (multiple)
    │   │   │       ├── SearchIcon
    │   │   │       ├── SearchQuery
    │   │   │       └── DeleteSearchButton
    │   │   └── TrendingSearches
    │   │       └── TrendingSearchItem (multiple)
    │   │           ├── TrendingIcon
    │   │           └── TrendingQuery
    │   └── NoResultsState (prikazuje se kad nema rezultata)
    │       ├── NoResultsIcon
    │       ├── NoResultsMessage
    │       └── SearchSuggestions
    └── SearchModalFooter
        └── KeyboardShortcuts (ESC, ↑↓, Enter)
```

---

## 1. HOMEPAGE / DASHBOARD

```
HomePage
├── Header (global)
├── Container
│   ├── HeroBanner
│   │   ├── BannerImage
│   │   ├── BannerTitle
│   │   ├── BannerDescription
│   │   └── CTAButton
│   ├── PromoSlider
│   │   └── PromoSlide (multiple)
│   │       ├── SlideImage
│   │       ├── SlideContent
│   │       └── SlideLink
│   ├── QuickActions
│   │   ├── QuickActionButton: Nove narudžbe
│   │   ├── QuickActionButton: Ponovi narudžbu
│   │   └── QuickActionButton: Preuzmi račune
│   ├── DashboardGrid
│   │   ├── RecentlyViewedSection
│   │   │   ├── SectionHeader
│   │   │   └── ProductCardMini (multiple)
│   │   │       ├── ProductImage
│   │   │       ├── ProductTitle
│   │   │       ├── ProductPrice
│   │   │       ├── StockStatus
│   │   │       └── QuickAddButton
│   │   ├── RecommendedSection
│   │   │   ├── SectionHeader
│   │   │   └── ProductCard (multiple)
│   │   │       ├── ProductImage
│   │   │       ├── ProductBadge
│   │   │       ├── ProductTitle
│   │   │       ├── ProductSKU
│   │   │       ├── ProductManufacturer
│   │   │       ├── ProductPrice
│   │   │       ├── StockStatus
│   │   │       ├── QuantityInput
│   │   │       ├── AddToCartButton
│   │   │       └── WishlistButton
│   │   ├── FrequentlyBoughtSection
│   │   │   ├── SectionHeader
│   │   │   └── ProductCard (multiple)
│   │   ├── SpecialOffersSection
│   │   │   ├── SectionHeader
│   │   │   └── OfferCard (multiple)
│   │   │       ├── OfferImage
│   │   │       ├── OfferTitle
│   │   │       ├── OfferDescription
│   │   │       ├── OfferDiscount
│   │   │       ├── CountdownTimer
│   │   │       └── OfferButton
│   │   ├── RecentOrdersSection
│   │   │   ├── SectionHeader
│   │   │   └── OrderCard (multiple)
│   │   │       ├── OrderNumber
│   │   │       ├── OrderDate
│   │   │       ├── OrderStatusBadge
│   │   │       ├── OrderItemsPreview
│   │   │       ├── OrderTotal
│   │   │       └── ViewDetailsButton
│   │   └── NotificationsSection
│   │       ├── SectionHeader
│   │       └── NotificationItem (multiple)
│   │           ├── NotificationIcon
│   │           ├── NotificationText
│   │           ├── NotificationTimestamp
│   │           └── DismissButton
└── Footer (global)
```

---

## 2. STRANICA REZULTATA PRETRAGE / PRODUCTS

```
ProductsPage
├── Header (global)
├── Container
│   ├── Breadcrumbs
│   ├── PageLayout (2 columns)
│   │   ├── Sidebar (left column)
│   │   │   ├── SidebarContainer
│   │   │   ├── FilterChips (active filters)
│   │   │   │   └── Chip (multiple)
│   │   │   │       ├── ChipLabel
│   │   │   │       └── RemoveButton
│   │   │   ├── ClearFilters
│   │   │   ├── CategoryTree
│   │   │   │   └── CategoryNode (multiple, recursive)
│   │   │   │       ├── CategoryIcon
│   │   │   │       ├── CategoryName
│   │   │   │       ├── ExpandCollapseIcon
│   │   │   │       └── Children (nested CategoryNode)
│   │   │   ├── FilterGroup: Proizvođači
│   │   │   │   ├── FilterGroupHeader
│   │   │   │   ├── FilterSearch (quick filter)
│   │   │   │   └── CheckboxFilter (multiple)
│   │   │   │       ├── Checkbox
│   │   │   │       ├── Label
│   │   │   │       └── Count
│   │   │   ├── FilterGroup: Serije
│   │   │   │   ├── FilterGroupHeader
│   │   │   │   ├── FilterSearch
│   │   │   │   └── CheckboxFilter (multiple)
│   │   │   ├── FilterGroup: Cijena
│   │   │   │   ├── FilterGroupHeader
│   │   │   │   └── RangeFilter
│   │   │   │       ├── MinInput
│   │   │   │       ├── MaxInput
│   │   │   │       └── DualSlider
│   │   │   └── FilterGroup: Dostupnost
│   │   │       ├── FilterGroupHeader
│   │   │       └── CheckboxFilter (multiple)
│   │   └── MainContent (right column)
│   │       ├── SearchResultsHeader
│   │       │   ├── ResultsCount
│   │       │   └── Breadcrumbs
│   │       ├── Toolbar
│   │       │   ├── ViewToggle
│   │       │   │   ├── GridViewButton
│   │       │   │   └── ListViewButton
│   │       │   └── SortDropdown
│   │       │       └── Select
│   │       │           ├── Option: Cijena - rastući
│   │       │           ├── Option: Cijena - padajući
│   │       │           ├── Option: Naziv A-Z
│   │       │           ├── Option: Naziv Z-A
│   │       │           ├── Option: Dostupnost
│   │       │           └── Option: Popularnost
│   │       ├── ProductGrid (or ProductList based on toggle)
│   │       │   └── ProductCard (multiple)
│   │       │       ├── ProductImage
│   │       │       │   ├── Image
│   │       │       │   └── ProductBadge (Akcija, Novo, Dostupno)
│   │       │       ├── ProductTitle
│   │       │       ├── ProductSKU
│   │       │       ├── ProductManufacturer
│   │       │       │   ├── ManufacturerLogo
│   │       │       │   └── ManufacturerName
│   │       │       ├── ProductPrice
│   │       │       │   ├── NetPrice / GrossPrice (toggle)
│   │       │       │   └── DiscountBadge (if applicable)
│   │       │       ├── StockStatus
│   │       │       ├── QuantityInput
│   │       │       │   ├── DecrementButton
│   │       │       │   ├── Input
│   │       │       │   └── IncrementButton
│   │       │       ├── AddToCartButton
│   │       │       └── WishlistButton
│   │       └── Pagination
│   │           ├── PreviousButton
│   │           ├── PageNumber (multiple)
│   │           ├── NextButton
│   │           └── LoadMoreButton (alternative)
└── Footer (global)
```

---

## 3. PRODUCT DETAILS PAGE

```
ProductDetailsPage
├── Header (global)
├── Container
│   ├── Breadcrumbs
│   ├── ProductMainSection (2 columns)
│   │   ├── LeftColumn
│   │   │   └── ProductGallery
│   │   │       ├── MainImage
│   │   │       │   ├── Image
│   │   │       │   └── ZoomButton (triggers ZoomModal)
│   │   │       └── ThumbnailCarousel
│   │   │           └── Thumbnail (multiple)
│   │   └── RightColumn
│   │       ├── ProductInfoCard
│   │       │   ├── ProductTitle
│   │       │   ├── ProductSKU
│   │       │   ├── ManufacturerBadge
│   │       │   │   ├── ManufacturerLogo
│   │       │   │   └── ManufacturerName
│   │       │   ├── SeriesBadge
│   │       │   └── ProductRating (optional)
│   │       │       ├── Stars
│   │       │       └── ReviewCount
│   │       ├── PriceCard
│   │       │   ├── PriceDisplay
│   │       │   ├── TaxToggle (Neto/Bruto)
│   │       │   └── DiscountBadge (if applicable)
│   │       ├── StockCard
│   │       │   ├── StockStatusBadge
│   │       │   └── DeliveryEstimate
│   │       └── AddToCartSection
│   │           ├── QuantityInput
│   │           │   ├── DecrementButton
│   │           │   ├── Input
│   │           │   └── IncrementButton
│   │           ├── AddToCartButton (large)
│   │           ├── WishlistButton
│   │           └── CompareButton
│   ├── ProductDetailsTabs
│   │   ├── TabNavigation
│   │   │   ├── Tab: Opis
│   │   │   ├── Tab: Specifikacije
│   │   │   ├── Tab: Dokumenti
│   │   │   └── Tab: Recenzije
│   │   ├── DescriptionTab
│   │   │   └── HTMLContent (rich text)
│   │   ├── SpecificationsTab
│   │   │   └── SpecsTable
│   │   │       └── SpecRow (multiple)
│   │   │           ├── SpecKey
│   │   │           └── SpecValue
│   │   ├── DocumentsTab
│   │   │   └── DocumentList
│   │   │       └── DocumentItem (multiple)
│   │   │           ├── DocumentIcon (PDF, XLSX, etc.)
│   │   │           ├── DocumentName
│   │   │           ├── DocumentMeta (size, date)
│   │   │           └── DownloadButton
│   │   └── ReviewsTab
│   │       └── ReviewList
│   │           └── ReviewItem (multiple)
│   │               ├── ReviewerName
│   │               ├── ReviewRating
│   │               ├── ReviewDate
│   │               └── ReviewText
│   ├── RelatedProductsSection
│   │   ├── SectionHeader
│   │   └── ProductCarousel
│   │       └── ProductCardMini (multiple)
│   └── FrequentlyBoughtSection
│       ├── SectionHeader
│       └── BundleCard (multiple)
│           ├── BundleProducts (mini product cards)
│           ├── BundlePrice
│           └── AddBundleToCartButton
└── Footer (global)

ZoomModal (otvara se na klik zoom button)
├── ModalOverlay
└── ModalContent
    ├── CloseButton
    ├── ZoomedImage
    └── NavigationButtons
        ├── PreviousImageButton
        └── NextImageButton
```

---

## 4. MANUFACTURERS PAGE

```
ManufacturersPage
├── Header (global)
├── Container
│   ├── Breadcrumbs
│   ├── PageHeader
│   │   └── PageTitle
│   ├── ManufacturersFilters
│   │   ├── SearchManufacturers
│   │   │   └── Input
│   │   └── AlphabetFilter
│   │       └── LetterButton (A-Z, multiple)
│   └── ManufacturersGrid
│       └── ManufacturerCard (multiple)
│           ├── ManufacturerLogo
│           ├── ManufacturerName
│           ├── ProductCount
│           └── ViewButton
└── Footer (global)
```

---

## 5. MANUFACTURER DETAIL PAGE

```
ManufacturerDetailPage
├── Header (global)
├── Container
│   ├── Breadcrumbs
│   ├── ManufacturerBanner
│   │   ├── ManufacturerLogo (large)
│   │   ├── ManufacturerInfo
│   │   │   ├── ManufacturerName
│   │   │   ├── Description
│   │   │   ├── WebsiteLink
│   │   │   └── DownloadCatalogButton
│   │   └── ManufacturerStats
│   │       ├── ProductCount
│   │       └── SeriesCount
│   ├── SeriesSection
│   │   ├── SectionHeader
│   │   └── SeriesGrid
│   │       └── SeriesCard (multiple)
│   │           ├── SeriesName
│   │           ├── ProductCount
│   │           └── ViewButton
│   ├── ProductsSection
│   │   ├── SectionHeader
│   │   ├── PageLayout (2 columns)
│   │   │   ├── Sidebar (reuse from ProductsPage)
│   │   │   └── MainContent
│   │   │       ├── Toolbar (reuse)
│   │   │       ├── ProductGrid (reuse)
│   │   │       └── Pagination (reuse)
└── Footer (global)
```

---

## 6. SERIES PAGE

```
SeriesPage
├── Header (global)
├── Container
│   ├── Breadcrumbs
│   ├── PageHeader
│   │   └── PageTitle
│   ├── SeriesFilters
│   │   ├── SearchSeries
│   │   │   └── Input
│   │   └── ManufacturerFilter
│   │       └── Select (filter by manufacturer)
│   └── SeriesGrid
│       └── SeriesCard (multiple)
│           ├── SeriesName
│           ├── SeriesImage (optional)
│           ├── ManufacturerBadge
│           │   ├── ManufacturerLogo
│           │   └── ManufacturerName
│           ├── ProductCount
│           └── ViewButton
└── Footer (global)
```

---

## 7. SERIES DETAIL PAGE

```
SeriesDetailPage
├── Header (global)
├── Container
│   ├── Breadcrumbs
│   ├── SeriesBanner
│   │   ├── SeriesName (large)
│   │   ├── ManufacturerLogo
│   │   ├── SeriesDescription
│   │   └── SeriesStats
│   │       └── ProductCount
│   ├── ProductsSection
│   │   ├── SectionHeader
│   │   └── PageLayout (2 columns)
│   │       ├── Sidebar (reuse from ProductsPage)
│   │       └── MainContent
│   │           ├── Toolbar (reuse)
│   │           ├── ProductGrid (reuse)
│   │           └── Pagination (reuse)
└── Footer (global)
```

---

## 8. SHOPPING CART PAGE

```
ShoppingCartPage
├── Header (global)
├── Container
│   ├── Breadcrumbs
│   ├── PageHeader
│   │   └── PageTitle
│   ├── CartContent (conditional render)
│   │   ├── IF cart is empty:
│   │   │   └── EmptyCart
│   │   │       ├── EmptyStateIcon
│   │   │       ├── EmptyStateMessage
│   │   │       └── ContinueShoppingButton
│   │   └── IF cart has items:
│   │       └── CartLayout (2 columns)
│   │           ├── MainColumn
│   │           │   └── CartTable
│   │           │       ├── CartTableHeader
│   │           │       │   ├── Column: Slika
│   │           │       │   ├── Column: Naziv
│   │           │       │   ├── Column: Šifra
│   │           │       │   ├── Column: Cijena
│   │           │       │   ├── Column: Količina
│   │           │       │   ├── Column: Subtotal
│   │           │       │   └── Column: Akcije
│   │           │       └── CartTableRow (multiple)
│   │           │           ├── CartItemImage
│   │           │           ├── CartItemInfo
│   │           │           │   ├── ProductTitle
│   │           │           │   ├── ProductSKU
│   │           │           │   └── ManufacturerName
│   │           │           ├── CartItemPrice
│   │           │           ├── CartItemQuantity
│   │           │           │   └── QuantityInput
│   │           │           │       ├── DecrementButton
│   │           │           │       ├── Input
│   │           │           │       └── IncrementButton
│   │           │           ├── CartItemSubtotal
│   │           │           └── RemoveButton
│   │           └── SideColumn
│   │               └── CartSummaryCard (sticky)
│   │                   ├── SubtotalRow
│   │                   ├── TaxRow
│   │                   ├── TotalRow (bold)
│   │                   ├── PromoCodeInput
│   │                   │   ├── Input
│   │                   │   └── ApplyButton
│   │                   ├── CheckoutButton (large, primary)
│   │                   └── ContinueShoppingButton (secondary)
│   └── RecommendedSection
│       ├── SectionHeader ("Možda vas zanima")
│       └── ProductCarousel
│           └── ProductCardMini (multiple)
└── Footer (global)
```

---

## 9. CHECKOUT PAGE

```
CheckoutPage
├── Header (global)
├── Container
│   ├── Breadcrumbs
│   ├── CheckoutStepper
│   │   ├── Step 1: Dostava (active/completed/upcoming)
│   │   ├── Step 2: Plaćanje
│   │   └── Step 3: Pregled
│   ├── CheckoutLayout (2 columns)
│   │   ├── MainColumn
│   │   │   └── CheckoutForm
│   │   │       ├── IF Step 1 (Shipping):
│   │   │       │   ├── StepHeader
│   │   │       │   ├── ShippingAddressForm
│   │   │       │   │   ├── AddressSelect (dropdown existing addresses)
│   │   │       │   │   ├── AddNewAddressButton
│   │   │       │   │   └── AddressFields
│   │   │       │   │       ├── FirstNameInput
│   │   │       │   │       ├── LastNameInput
│   │   │       │   │       ├── AddressInput
│   │   │       │   │       ├── CityInput
│   │   │       │   │       ├── PostalCodeInput
│   │   │       │   │       ├── CountrySelect
│   │   │       │   │       └── PhoneInput
│   │   │       │   ├── ShippingMethodSelect
│   │   │       │   │   └── ShippingOptionCard (multiple)
│   │   │       │   │       ├── ShippingIcon
│   │   │       │   │       ├── ShippingName
│   │   │       │   │       ├── ShippingPrice
│   │   │       │   │       ├── ShippingEstimate
│   │   │       │   │       └── RadioButton
│   │   │       │   └── ContinueButton
│   │   │       ├── IF Step 2 (Payment):
│   │   │       │   ├── StepHeader
│   │   │       │   ├── BillingAddressToggle
│   │   │       │   │   └── Checkbox ("Ista kao shipping")
│   │   │       │   ├── BillingAddressForm (if not same)
│   │   │       │   │   └── AddressFields (reuse)
│   │   │       │   ├── PaymentMethodSelect
│   │   │       │   │   └── PaymentOptionCard (multiple)
│   │   │       │   │       ├── PaymentIcon (Virman, Kartica, Gotovina)
│   │   │       │   │       ├── PaymentName
│   │   │       │   │       ├── PaymentDescription
│   │   │       │   │       └── RadioButton
│   │   │       │   ├── CardPaymentForm (if card selected)
│   │   │       │   │   ├── CardNumberInput
│   │   │       │   │   ├── ExpiryInput
│   │   │       │   │   ├── CVVInput
│   │   │       │   │   └── CardholderNameInput
│   │   │       │   └── ContinueButton
│   │   │       └── IF Step 3 (Review):
│   │   │           ├── StepHeader
│   │   │           ├── OrderReviewSummary
│   │   │           │   ├── ShippingAddressDisplay (readonly)
│   │   │           │   │   ├── AddressHeader
│   │   │           │   │   ├── AddressDetails
│   │   │           │   │   └── EditButton
│   │   │           │   ├── BillingAddressDisplay (readonly)
│   │   │           │   │   ├── AddressHeader
│   │   │           │   │   ├── AddressDetails
│   │   │           │   │   └── EditButton
│   │   │           │   ├── ShippingMethodDisplay
│   │   │           │   │   ├── MethodName
│   │   │           │   │   ├── MethodPrice
│   │   │           │   │   └── EditButton
│   │   │           │   ├── PaymentMethodDisplay
│   │   │           │   │   ├── MethodName
│   │   │           │   │   ├── MethodDetails (masked card if applicable)
│   │   │           │   │   └── EditButton
│   │   │           │   ├── OrderItemsList (readonly)
│   │   │           │   │   └── OrderItem (multiple)
│   │   │           │   │       ├── ItemImage
│   │   │           │   │       ├── ItemName
│   │   │           │   │       ├── ItemSKU
│   │   │           │   │       ├── ItemQuantity
│   │   │           │   │       └── ItemPrice
│   │   │           │   └── OrderTotalSummary
│   │   │           │       ├── SubtotalRow
│   │   │           │       ├── ShippingRow
│   │   │           │       ├── TaxRow
│   │   │           │       └── TotalRow (bold, large)
│   │   │           ├── OrderNotesTextarea
│   │   │           ├── TermsCheckbox
│   │   │           │   ├── Checkbox
│   │   │           │   └── TermsLink
│   │   │           └── PlaceOrderButton (large, primary)
│   │   └── SideColumn
│   │       └── OrderSummarySidebar (sticky)
│   │           ├── SidebarHeader
│   │           ├── OrderItemsMini (list)
│   │           │   └── OrderItemMini (multiple)
│   │           │       ├── ItemImage (small)
│   │           │       ├── ItemName
│   │           │       ├── ItemQuantity
│   │           │       └── ItemPrice
│   │           └── OrderTotalCard
│   │               ├── SubtotalRow
│   │               ├── ShippingRow
│   │               ├── TaxRow
│   │               └── TotalRow
└── Footer (global)
```

---

## 10. ORDER CONFIRMATION PAGE

```
OrderConfirmationPage
├── Header (global)
├── Container
│   ├── ConfirmationHero
│   │   ├── SuccessIcon (large checkmark)
│   │   ├── ThankYouMessage
│   │   ├── OrderNumber (bold, large)
│   │   └── OrderDate
│   ├── OrderDetailsCard
│   │   ├── CardHeader
│   │   ├── OrderItemsList
│   │   │   └── OrderItem (multiple)
│   │   │       ├── ItemImage
│   │   │       ├── ItemInfo
│   │   │       │   ├── ItemName
│   │   │       │   └── ItemSKU
│   │   │       ├── ItemQuantity
│   │   │       ├── ItemPrice
│   │   │       └── ItemSubtotal
│   │   ├── OrderTotalSummary
│   │   │   ├── SubtotalRow
│   │   │   ├── ShippingRow
│   │   │   ├── TaxRow
│   │   │   └── TotalRow
│   │   ├── ShippingInfo
│   │   │   ├── SectionHeader
│   │   │   ├── ShippingAddress
│   │   │   └── ShippingMethod
│   │   └── PaymentInfo
│   │       ├── SectionHeader
│   │       └── PaymentMethod
│   ├── NextStepsCard
│   │   ├── CardHeader
│   │   ├── TrackingInfo (if available)
│   │   │   ├── TrackingNumber
│   │   │   └── TrackingLink
│   │   ├── EstimatedDelivery
│   │   ├── DownloadInvoiceButton
│   │   └── PrintButton
│   └── ContinueShoppingButton
└── Footer (global)
```

---

## 11. USER ACCOUNT PAGES

### Account Layout (wrapper za sve account stranice)

```
AccountLayout
├── Header (global)
├── Container
│   ├── Breadcrumbs
│   ├── AccountLayoutGrid (2 columns)
│   │   ├── AccountSidebar
│   │   │   └── AccountMenu
│   │   │       ├── AccountMenuItem: Moj račun (icon + label)
│   │   │       ├── AccountMenuItem: Promjena lozinke
│   │   │       ├── AccountMenuItem: Moji proizvodi
│   │   │       ├── AccountMenuItem: Zadnje pogledano
│   │   │       ├── AccountMenuItem: Često naručeno
│   │   │       ├── AccountMenuItem: Moji dokumenti
│   │   │       ├── AccountMenuItem: Nalozi
│   │   │       ├── AccountMenuItem: Ponude
│   │   │       ├── AccountMenuItem: Otpremnice
│   │   │       ├── AccountMenuItem: Moji računi
│   │   │       ├── AccountMenuItem: Podaci o korisniku
│   │   │       ├── AccountMenuItem: Adresna knjiga
│   │   │       └── AccountMenuItem: Wishlist
│   │   └── AccountContent
│   │       └── [Content za specifičnu stranicu - vidi ispod]
└── Footer (global)
```

### 11a. LOGIN / REGISTER (ne koristi AccountLayout)

```
LoginRegisterPage
├── Header (global)
├── Container
│   ├── PageLayout (2 columns, centered)
│   │   ├── LoginColumn
│   │   │   ├── ColumnHeader
│   │   │   ├── LoginForm
│   │   │   │   ├── EmailInput
│   │   │   │   │   ├── FormLabel
│   │   │   │   │   ├── Input
│   │   │   │   │   └── FormError (if error)
│   │   │   │   ├── PasswordInput
│   │   │   │   │   ├── FormLabel
│   │   │   │   │   ├── Input
│   │   │   │   │   ├── TogglePasswordVisibility
│   │   │   │   │   └── FormError (if error)
│   │   │   │   ├── RememberMeCheckbox
│   │   │   │   ├── ForgotPasswordLink
│   │   │   │   └── LoginButton
│   │   │   ├── DividerWithText ("ili")
│   │   │   └── SocialLogin
│   │   │       ├── GoogleLoginButton
│   │   │       └── FacebookLoginButton
│   │   ├── Divider (vertical)
│   │   └── RegisterColumn
│   │       ├── ColumnHeader
│   │       └── RegisterForm
│   │           ├── CompanyInfoFields
│   │           │   ├── CompanyNameInput
│   │           │   ├── PIBInput
│   │           │   └── PDVInput
│   │           ├── ContactFields
│   │           │   ├── FirstNameInput
│   │           │   ├── LastNameInput
│   │           │   ├── EmailInput
│   │           │   └── PhoneInput
│   │           ├── AddressFields
│   │           │   ├── AddressInput
│   │           │   ├── CityInput
│   │           │   ├── PostalCodeInput
│   │           │   └── CountrySelect
│   │           ├── PasswordFields
│   │           │   ├── PasswordInput
│   │           │   │   ├── FormLabel
│   │           │   │   ├── Input
│   │           │   │   └── PasswordStrengthIndicator
│   │           │   └── ConfirmPasswordInput
│   │           ├── TermsCheckbox
│   │           │   ├── Checkbox
│   │           │   └── TermsLink
│   │           └── RegisterButton
└── Footer (global)
```

### 11b. MY ACCOUNT DASHBOARD

```
AccountContent (inside AccountLayout)
└── DashboardPage
    ├── PageHeader
    ├── DashboardStats
    │   ├── StatCard: Aktivne narudžbe
    │   │   ├── StatIcon
    │   │   ├── StatValue
    │   │   └── StatLabel
    │   ├── StatCard: Ukupna potrošnja
    │   ├── StatCard: Wishlist stavki
    │   └── StatCard: Nedavno pregledano
    ├── QuickActionsGrid
    │   └── QuickActionCard (multiple)
    │       ├── ActionIcon
    │       ├── ActionTitle
    │       └── ActionButton
    ├── RecentOrdersList
    │   ├── SectionHeader
    │   └── OrderCardMini (multiple)
    │       ├── OrderNumber
    │       ├── OrderDate
    │       ├── OrderStatusBadge
    │       ├── OrderTotal
    │       └── ViewButton
    └── ActivitySection
        ├── SectionHeader
        └── ActivityFeed
            └── ActivityItem (multiple)
                ├── ActivityIcon
                ├── ActivityText
                └── ActivityTimestamp
```

### 11c. PROMJENA LOZINKE

```
AccountContent (inside AccountLayout)
└── ChangePasswordPage
    ├── PageHeader
    └── ChangePasswordForm
        ├── FormCard
        │   ├── CurrentPasswordInput
        │   │   ├── FormLabel
        │   │   ├── Input
        │   │   ├── TogglePasswordVisibility
        │   │   └── FormError
        │   ├── NewPasswordInput
        │   │   ├── FormLabel
        │   │   ├── Input
        │   │   ├── TogglePasswordVisibility
        │   │   ├── PasswordStrengthIndicator
        │   │   │   ├── ProgressBar
        │   │   │   └── StrengthLabel (Slaba, Srednja, Jaka)
        │   │   └── FormError
        │   ├── ConfirmPasswordInput
        │   │   ├── FormLabel
        │   │   ├── Input
        │   │   ├── TogglePasswordVisibility
        │   │   └── FormError
        │   └── FormActions
        │       ├── CancelButton
        │       └── SubmitButton
        └── PasswordRequirements
            └── RequirementList
                ├── Requirement: Min 8 characters
                ├── Requirement: Uppercase letter
                ├── Requirement: Lowercase letter
                ├── Requirement: Number
                └── Requirement: Special character
```

### 11d. MOJI PROIZVODI

```
AccountContent (inside AccountLayout)
└── MyProductsPage
    ├── PageHeader
    │   ├── PageTitle
    │   └── FiltersToggle
    ├── ProductsToolbar
    │   ├── ViewToggle (Grid/List)
    │   └── SortDropdown
    └── MyProductsGrid
        └── ProductCard (multiple, with SpecialPriceTag)
            ├── ProductImage
            ├── SpecialPriceTag ("Vaša cijena")
            ├── ProductTitle
            ├── ProductSKU
            ├── ProductManufacturer
            ├── ProductPrice
            │   ├── RegularPrice (strikethrough)
            │   └── SpecialPrice (highlighted)
            ├── StockStatus
            ├── QuantityInput
            ├── AddToCartButton
            └── WishlistButton
```

### 11e. ZADNJE POGLEDANO

```
AccountContent (inside AccountLayout)
└── RecentlyViewedPage
    ├── PageHeader
    │   ├── PageTitle
    │   └── ClearHistoryButton
    ├── ViewedToolbar
    │   ├── ViewToggle
    │   └── DateFilter (Today, This week, This month, All)
    └── RecentlyViewedList
        └── ProductCard (multiple)
            ├── ProductImage
            ├── ViewedTimestamp
            ├── ProductTitle
            ├── ProductSKU
            ├── ProductManufacturer
            ├── ProductPrice
            ├── StockStatus
            ├── QuantityInput
            ├── AddToCartButton
            └── WishlistButton
```

### 11f. ČESTO NARUČENO

```
AccountContent (inside AccountLayout)
└── FrequentlyOrderedPage
    ├── PageHeader
    ├── FrequentlyOrderedList
    │   └── FrequentProductCard (multiple)
    │       ├── ProductImage
    │       ├── OrderFrequencyBadge ("Naručeno X puta")
    │       ├── LastOrderedDate
    │       ├── ProductTitle
    │       ├── ProductSKU
    │       ├── ProductManufacturer
    │       ├── ProductPrice
    │       ├── StockStatus
    │       ├── QuantityInput (with last ordered quantity as default)
    │       ├── QuickReorderButton
    │       └── ViewDetailsButton
    └── ReorderAllSection
        ├── SelectedProductsCount
        └── ReorderSelectedButton
```

### 11g. MOJI DOKUMENTI

```
AccountContent (inside AccountLayout)
└── MyDocumentsPage
    ├── PageHeader
    │   ├── PageTitle
    │   └── UploadDocumentButton
    ├── DocumentsToolbar
    │   ├── SearchDocuments
    │   ├── DocumentFilters
    │   │   └── FilterSelect (All, PDF, Excel, Word, Katalozi, Računi)
    │   └── ViewToggle (Grid/List)
    └── DocumentsGrid
        └── DocumentCard (multiple)
            ├── DocumentIcon (based on type)
            ├── DocumentName
            ├── DocumentMeta
            │   ├── FileSize
            │   ├── DateUploaded
            │   └── UploadedBy
            ├── DocumentActions
            │   ├── DownloadButton
            │   ├── PreviewButton
            │   ├── ShareButton
            │   └── DeleteButton
            └── DocumentTags
                └── Tag (multiple)
```

### 11h. NALOZI / ORDER HISTORY

```
AccountContent (inside AccountLayout)
└── OrderHistoryPage
    ├── PageHeader
    ├── OrdersFilters
    │   ├── SearchOrders (by order number)
    │   ├── DateRangePicker
    │   │   ├── StartDateInput
    │   │   └── EndDateInput
    │   ├── StatusFilter
    │   │   └── MultiSelect (Processing, Shipped, Delivered, Cancelled)
    │   └── ClearFiltersButton
    ├── OrdersTable
    │   ├── OrdersTableHeader
    │   │   ├── Column: Datum
    │   │   ├── Column: Broj narudžbe
    │   │   ├── Column: Status
    │   │   ├── Column: Ukupno
    │   │   └── Column: Akcije
    │   └── OrdersTableRow (multiple)
    │       ├── OrderDate
    │       ├── OrderNumber (clickable link)
    │       ├── OrderStatusBadge
    │       │   ├── StatusIcon
    │       │   └── StatusText
    │       ├── OrderTotal
    │       └── OrderActions
    │           └── ActionsDropdown
    │               ├── ViewDetailsAction
    │               ├── ReorderAction
    │               ├── DownloadInvoiceAction
    │               └── TrackShipmentAction
    └── OrdersPagination
```

### 11i. ORDER DETAILS

```
AccountContent (inside AccountLayout)
└── OrderDetailsPage
    ├── OrderDetailsHeader
    │   ├── BackButton
    │   ├── OrderNumber (large)
    │   ├── OrderDate
    │   ├── OrderStatusBadge
    │   └── OrderActions
    │       ├── DownloadInvoiceButton
    │       ├── PrintButton
    │       └── ReorderButton
    ├── OrderProgress
    │   └── Timeline (if applicable)
    │       ├── TimelineStep: Order Placed
    │       ├── TimelineStep: Processing
    │       ├── TimelineStep: Shipped
    │       └── TimelineStep: Delivered
    ├── OrderDetailsGrid (2 columns)
    │   ├── MainColumn
    │   │   ├── OrderItemsTable
    │   │   │   ├── TableHeader
    │   │   │   └── TableRow (multiple)
    │   │   │       ├── ItemImage
    │   │   │       ├── ItemInfo
    │   │   │       │   ├── ItemName
    │   │   │       │   ├── ItemSKU
    │   │   │       │   └── ManufacturerName
    │   │   │       ├── ItemQuantity
    │   │   │       ├── ItemPrice
    │   │   │       └── ItemSubtotal
    │   │   └── OrderTotalSummary
    │   │       ├── SubtotalRow
    │   │       ├── ShippingRow
    │   │       ├── TaxRow
    │   │       └── TotalRow
    │   └── SideColumn
    │       ├── ShippingInfoCard
    │       │   ├── CardHeader
    │       │   ├── ShippingAddress
    │       │   └── ShippingMethod
    │       ├── PaymentInfoCard
    │       │   ├── CardHeader
    │       │   ├── PaymentMethod
    │       │   └── PaymentStatus
    │       └── TrackingInfoCard (if available)
    │           ├── CardHeader
    │           ├── TrackingNumber
    │           ├── TrackingLink
    │           └── TrackingTimeline
    │               └── TrackingStep (multiple)
    │                   ├── StepIcon
    │                   ├── StepStatus
    │                   ├── StepLocation
    │                   └── StepTimestamp
    └── RelatedActions
        ├── ReorderButton
        ├── ContactSupportButton
        └── ReturnItemsButton
```

### 11j. PONUDE / QUOTES

```
AccountContent (inside AccountLayout)
└── QuotesPage
    ├── PageHeader
    │   ├── PageTitle
    │   └── CreateQuoteButton
    ├── QuotesFilters
    │   ├── SearchQuotes
    │   ├── StatusFilter (All, Draft, Poslano, Prihvaćeno, Odbijeno, Isteklo)
    │   └── DateRangePicker
    ├── QuotesTable
    │   ├── QuotesTableHeader
    │   │   ├── Column: Broj ponude
    │   │   ├── Column: Datum
    │   │   ├── Column: Status
    │   │   ├── Column: Ukupno
    │   │   ├── Column: Istek
    │   │   └── Column: Akcije
    │   └── QuotesTableRow (multiple)
    │       ├── QuoteNumber
    │       ├── QuoteDate
    │       ├── QuoteStatusBadge
    │       ├── QuoteTotal
    │       ├── ExpiryDate
    │       └── QuoteActions
    │           └── ActionsDropdown
    │               ├── ViewAction
    │               ├── EditAction (if draft)
    │               ├── ConvertToOrderAction (if accepted)
    │               ├── DownloadPDFAction
    │               └── DeleteAction
    └── QuotesPagination
```

### 11k. OTPREMNICE / DELIVERY NOTES

```
AccountContent (inside AccountLayout)
└── DeliveryNotesPage
    ├── PageHeader
    ├── DeliveryNotesFilters
    │   ├── SearchDeliveryNotes
    │   ├── DateRangePicker
    │   └── StatusFilter
    ├── DeliveryNotesTable
    │   ├── DeliveryNotesTableHeader
    │   │   ├── Column: Broj otpremnice
    │   │   ├── Column: Datum
    │   │   ├── Column: Povezana narudžba
    │   │   ├── Column: Tracking broj
    │   │   ├── Column: Status
    │   │   └── Column: Akcije
    │   └── DeliveryNoteRow (multiple)
    │       ├── DeliveryNoteNumber
    │       ├── DeliveryDate
    │       ├── RelatedOrderNumber (clickable link)
    │       ├── TrackingNumber
    │       ├── StatusBadge
    │       └── DeliveryNoteActions
    │           ├── DownloadButton
    │           ├── TrackShipmentButton
    │           └── PrintButton
    └── DeliveryNotesPagination
```

### 11l. MOJI RAČUNI / INVOICES

```
AccountContent (inside AccountLayout)
└── InvoicesPage
    ├── PageHeader
    ├── InvoicesSummary
    │   ├── TotalOutstanding (neplaćeni računi)
    │   └── TotalPaid (plaćeni)
    ├── InvoicesFilters
    │   ├── SearchInvoices
    │   ├── DateRangePicker
    │   └── PaymentStatusFilter (All, Plaćeno, Neplaćeno, Djelimično plaćeno, Zakašnjelo)
    ├── InvoicesTable
    │   ├── InvoicesTableHeader
    │   │   ├── Column: Broj računa
    │   │   ├── Column: Datum izdavanja
    │   │   ├── Column: Iznos
    │   │   ├── Column: Status plaćanja
    │   │   ├── Column: Rok plaćanja
    │   │   └── Column: Akcije
    │   └── InvoiceRow (multiple)
    │       ├── InvoiceNumber
    │       ├── InvoiceDate
    │       ├── InvoiceAmount
    │       ├── PaymentStatusBadge
    │       │   ├── StatusIcon
    │       │   └── StatusText
    │       ├── DueDateDisplay (highlighted if overdue)
    │       └── InvoiceActions
    │           ├── DownloadButton
    │           ├── ViewButton
    │           ├── PrintButton
    │           └── PayButton (if unpaid)
    └── InvoicesPagination
```

### 11m. PROFILE / PODACI O KORISNIKU

```
AccountContent (inside AccountLayout)
└── ProfilePage
    ├── PageHeader
    └── ProfileForm
        ├── PersonalInfoSection
        │   ├── SectionHeader
        │   ├── AvatarUpload
        │   │   ├── AvatarPreview
        │   │   ├── UploadButton
        │   │   └── RemoveButton
        │   ├── FirstNameInput
        │   ├── LastNameInput
        │   ├── EmailInput (usually readonly)
        │   └── PhoneInput
        ├── CompanyInfoSection
        │   ├── SectionHeader
        │   ├── CompanyNameInput
        │   ├── PIBInput
        │   ├── PDVInput
        │   ├── CompanyAddressInput
        │   └── CompanyPhoneInput
        ├── NotificationPreferences
        │   ├── SectionHeader
        │   ├── EmailNotificationsToggle
        │   │   ├── Label: Order updates
        │   │   └── Switch
        │   ├── EmailNotificationsToggle
        │   │   ├── Label: Promotions
        │   │   └── Switch
        │   ├── EmailNotificationsToggle
        │   │   ├── Label: Newsletter
        │   │   └── Switch
        │   └── EmailNotificationsToggle
        │       ├── Label: Price changes
        │       └── Switch
        └── FormActions
            ├── CancelButton
            └── SaveButton
```

### 11n. ADDRESS BOOK

```
AccountContent (inside AccountLayout)
└── AddressBookPage
    ├── PageHeader
    │   ├── PageTitle
    │   └── AddAddressButton
    └── AddressBookGrid
        └── AddressCard (multiple)
            ├── AddressType (badge: Shipping/Billing)
            ├── DefaultBadge (if default address)
            ├── AddressDetails
            │   ├── RecipientName
            │   ├── AddressLine1
            │   ├── AddressLine2
            │   ├── City, PostalCode
            │   ├── Country
            │   └── Phone
            └── AddressActions
                ├── EditButton
                ├── DeleteButton
                └── SetAsDefaultButton

AddressModal (otvara se za Add/Edit)
├── ModalOverlay
└── ModalContent
    ├── ModalHeader
    │   ├── ModalTitle (Add/Edit Address)
    │   └── CloseButton
    ├── ModalBody
    │   └── AddressForm
    │       ├── AddressTypeSelect (Shipping/Billing/Both)
    │       ├── FirstNameInput
    │       ├── LastNameInput
    │       ├── CompanyInput (optional)
    │       ├── AddressLine1Input
    │       ├── AddressLine2Input (optional)
    │       ├── CityInput
    │       ├── PostalCodeInput
    │       ├── CountrySelect
    │       ├── PhoneInput
    │       └── SetAsDefaultCheckbox
    └── ModalFooter
        ├── CancelButton
        └── SaveButton
```

### 11o. WISHLIST

```
AccountContent (inside AccountLayout)
└── WishlistPage
    ├── PageHeader
    │   ├── PageTitle
    │   └── WishlistCount
    ├── WishlistContent (conditional render)
    │   ├── IF wishlist is empty:
    │   │   └── EmptyWishlist
    │   │       ├── EmptyStateIcon
    │   │       ├── EmptyStateMessage
    │   │       └── BrowseProductsButton
    │   └── IF wishlist has items:
    │       ├── WishlistToolbar
    │       │   ├── ViewToggle (Grid/List)
    │       │   ├── SortDropdown
    │       │   └── AddAllToCartButton
    │       └── WishlistGrid
    │           └── ProductCard (multiple)
    │               ├── ProductImage
    │               ├── RemoveFromWishlistButton (heart icon, filled)
    │               ├── DateAdded
    │               ├── ProductTitle
    │               ├── ProductSKU
    │               ├── ProductManufacturer
    │               ├── ProductPrice
    │               ├── StockStatus
    │               ├── StockChangeNotification (if changed since added)
    │               ├── PriceChangeNotification (if changed since added)
    │               ├── QuantityInput
    │               └── AddToCartButton
    └── WishlistActions
        ├── ShareWishlistButton
        └── ClearWishlistButton
```

---

## 12. STATIC PAGES

### O NAMA / ABOUT

```
AboutPage
├── Header (global)
├── Container
│   ├── AboutHero
│   │   ├── HeroImage
│   │   ├── HeroTitle
│   │   └── HeroSubtitle
│   ├── CompanyStorySection
│   │   ├── SectionHeader
│   │   ├── StoryContent (rich text with images)
│   │   └── StoryImages
│   ├── TeamSection
│   │   ├── SectionHeader
│   │   └── TeamGrid
│   │       └── TeamMemberCard (multiple)
│   │           ├── MemberPhoto
│   │           ├── MemberName
│   │           ├── MemberPosition
│   │           └── MemberBio (optional)
│   ├── ValuesSection
│   │   ├── SectionHeader
│   │   └── ValuesGrid
│   │       └── ValueCard (multiple)
│   │           ├── ValueIcon
│   │           ├── ValueTitle
│   │           └── ValueDescription
│   └── CTASection
│       ├── CTATitle
│       ├── CTADescription
│       └── CTAButton
└── Footer (global)
```

### KONTAKT

```
ContactPage
├── Header (global)
├── Container
│   ├── ContactHero
│   │   └── PageTitle
│   ├── ContactLayout (2 columns)
│   │   ├── LeftColumn
│   │   │   ├── ContactForm
│   │   │   │   ├── FormHeader
│   │   │   │   ├── NameInput
│   │   │   │   ├── EmailInput
│   │   │   │   ├── PhoneInput (optional)
│   │   │   │   ├── SubjectInput
│   │   │   │   ├── MessageTextarea
│   │   │   │   └── SendButton
│   │   │   └── FormSuccessMessage (after submit)
│   │   └── RightColumn
│   │       └── ContactInfoSection
│   │           ├── InfoBlock: Address
│   │           │   ├── Icon
│   │           │   ├── Label
│   │           │   └── Value
│   │           ├── InfoBlock: Phone
│   │           ├── InfoBlock: Email
│   │           ├── InfoBlock: Working Hours
│   │           └── SocialIcons
│   └── MapEmbed
│       └── GoogleMap
└── Footer (global)
```

### FAQ

```
FAQPage
├── Header (global)
├── Container
│   ├── FAQHero
│   │   ├── PageTitle
│   │   └── SearchFAQ
│   │       └── SearchInput
│   ├── FAQContent (2 columns)
│   │   ├── FAQSidebar
│   │   │   └── FAQCategories
│   │   │       └── CategoryButton (multiple)
│   │   │           ├── CategoryIcon
│   │   │           └── CategoryName
│   │   └── FAQMainContent
│   │       └── FAQCategory (multiple)
│   │           ├── CategoryHeader
│   │           └── FAQAccordion
│   │               └── FAQItem (multiple)
│   │                   ├── QuestionButton
│   │                   │   ├── QuestionText
│   │                   │   └── ExpandIcon
│   │                   └── AnswerContent (collapsible)
│   │                       └── AnswerText (rich text)
│   └── ContactSupport
│       ├── SupportMessage
│       └── ContactButton
└── Footer (global)
```

### USLOVI KORIŠTENJA / POLITIKA PRIVATNOSTI

```
LegalPage
├── Header (global)
├── Container
│   ├── LegalPageLayout (2 columns)
│   │   ├── TableOfContents (sticky sidebar)
│   │   │   ├── TOCHeader
│   │   │   └── TOCList
│   │   │       └── TOCItem (multiple)
│   │   │           ├── SectionNumber
│   │   │           ├── SectionTitle
│   │   │           └── SubItems (nested)
│   │   └── LegalContent
│   │       ├── PageTitle
│   │       ├── LastUpdated
│   │       └── ContentSections (multiple)
│   │           ├── SectionHeading (h2)
│   │           ├── SubsectionHeading (h3)
│   │           ├── Paragraph
│   │           ├── BulletList
│   │           └── OrderedList
│   └── AcceptanceSection (for Terms)
│       ├── AcceptanceText
│       └── AcceptButton
└── Footer (global)
```

---

## HELPER/UTILITY MODALI I OVERLAYS

### Toast Notification (global)
```
Toast
├── ToastContainer (fixed position)
└── ToastItem (multiple, stacked)
    ├── ToastIcon (success, error, warning, info)
    ├── ToastMessage
    ├── ToastAction (optional button)
    └── CloseButton
```

### Confirm Dialog
```
ConfirmDialog
├── DialogOverlay
└── DialogContent
    ├── DialogIcon (warning, info)
    ├── DialogTitle
    ├── DialogMessage
    └── DialogActions
        ├── CancelButton
        └── ConfirmButton
```

### Loading Overlay
```
LoadingOverlay
├── Overlay
└── LoadingSpinner
    ├── Spinner
    └── LoadingText (optional)
```

---

## SUMMARY

**Total stranica:** 25+
**Total unique komponenti:** ~260+
**Maksimalna dubina nestinga:** 6-7 levels
**Najkompleksnija stranica:** Checkout Page (60+ komponenti)
**Najčešće reusovane komponente:**
- ProductCard (10+ stranica)
- Header/Footer (sve stranice)
- Button variants (sve stranice)
- Form inputs (15+ stranica)

---

## NAPOMENE ZA IMPLEMENTACIJU

1. **Komponente su hijerarhijski organizovane** - velike komponente sadrže manje
2. **Reusability je ključan** - ProductCard, Button, Input, itd. se koriste svuda
3. **Layout komponente** (Header, Footer, Sidebar) su globalne i konzistentne
4. **Conditional rendering** - mnoge komponente prikazuju različit sadržaj baziran na stanju
5. **Responsive design** - sve komponente moraju biti mobile-first
6. **Accessibility** - svaka interaktivna komponenta treba ARIA labels
7. **Loading/Error states** - svaka komponenta koja fetcha data treba loading i error state
8. **TypeScript** - sve props moraju biti tipizirane
9. **Tailwind CSS** - konzistentan styling system kroz sve komponente
10. **Performance** - lazy loading za slike, code splitting za stranice, memoization gdje je potrebno
