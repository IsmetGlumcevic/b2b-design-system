'use client'

import { useState } from 'react'
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
} from '@/src/components/ui/Modal'
import { Button } from '@/src/components/ui/buttons'
import { Badge } from '@/src/components/ui/Badge'

/** Simple icons for demonstration */
function AlertIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export default function ModalPage() {
  // Modal states
  const [basicModal, setBasicModal] = useState(false)
  const [sizeSm, setSizeSm] = useState(false)
  const [sizeMd, setSizeMd] = useState(false)
  const [sizeLg, setSizeLg] = useState(false)
  const [sizeXl, setSizeXl] = useState(false)
  const [sizeFull, setSizeFull] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [formModal, setFormModal] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  const [noCloseButton, setNoCloseButton] = useState(false)
  const [noOverlayClose, setNoOverlayClose] = useState(false)

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Modal
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Modal komponenta sa overlay-em, animacijama i kompozabilnom strukturom. Koristi portal za renderovanje izvan React stabla.
        </p>
      </div>

      {/* Basic Modal */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Osnovni modal
        </h2>
        <Button onClick={() => setBasicModal(true)}>Otvori basic modal</Button>

        <Modal isOpen={basicModal} onClose={() => setBasicModal(false)}>
          <ModalHeader>
            <ModalTitle>Naslov modala</ModalTitle>
            <ModalDescription>
              Ovo je opis koji objašnjava svrhu ovog modala.
            </ModalDescription>
          </ModalHeader>
          <ModalBody>
            <p className="text-[var(--color-text-secondary)]">
              Ovo je sadržaj modala. Ovdje možete staviti bilo kakav sadržaj - tekst, forme, slike, ili druge komponente.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setBasicModal(false)}>
              Otkaži
            </Button>
            <Button variant="primary" onClick={() => setBasicModal(false)}>
              Potvrdi
            </Button>
          </ModalFooter>
        </Modal>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Veličine
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" onClick={() => setSizeSm(true)}>Small (sm)</Button>
          <Button variant="outline" onClick={() => setSizeMd(true)}>Medium (md)</Button>
          <Button variant="outline" onClick={() => setSizeLg(true)}>Large (lg)</Button>
          <Button variant="outline" onClick={() => setSizeXl(true)}>Extra Large (xl)</Button>
          <Button variant="outline" onClick={() => setSizeFull(true)}>Full</Button>
        </div>

        {/* Size modals */}
        <Modal isOpen={sizeSm} onClose={() => setSizeSm(false)} size="sm">
          <ModalHeader>
            <ModalTitle>Small Modal</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p className="text-[var(--color-text-secondary)]">Ovo je mali modal (max-width: 24rem).</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="primary" onClick={() => setSizeSm(false)}>Zatvori</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={sizeMd} onClose={() => setSizeMd(false)} size="md">
          <ModalHeader>
            <ModalTitle>Medium Modal</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p className="text-[var(--color-text-secondary)]">Ovo je srednji modal (max-width: 28rem). Ovo je default veličina.</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="primary" onClick={() => setSizeMd(false)}>Zatvori</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={sizeLg} onClose={() => setSizeLg(false)} size="lg">
          <ModalHeader>
            <ModalTitle>Large Modal</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p className="text-[var(--color-text-secondary)]">Ovo je veliki modal (max-width: 32rem).</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="primary" onClick={() => setSizeLg(false)}>Zatvori</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={sizeXl} onClose={() => setSizeXl(false)} size="xl">
          <ModalHeader>
            <ModalTitle>Extra Large Modal</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p className="text-[var(--color-text-secondary)]">Ovo je extra veliki modal (max-width: 36rem).</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="primary" onClick={() => setSizeXl(false)}>Zatvori</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={sizeFull} onClose={() => setSizeFull(false)} size="full">
          <ModalHeader>
            <ModalTitle>Full Modal</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p className="text-[var(--color-text-secondary)]">Ovo je full modal koji zauzima skoro cijeli ekran.</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="primary" onClick={() => setSizeFull(false)}>Zatvori</Button>
          </ModalFooter>
        </Modal>
      </section>

      {/* Use Cases */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Primjeri korištenja
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Button variant="outline" onClick={() => setConfirmModal(true)}>
            Confirmation modal
          </Button>
          <Button variant="danger" onClick={() => setDeleteModal(true)}>
            Delete modal
          </Button>
          <Button variant="secondary" onClick={() => setFormModal(true)}>
            Form modal
          </Button>
          <Button variant="primary" onClick={() => setSuccessModal(true)}>
            Success modal
          </Button>
        </div>

        {/* Confirmation Modal */}
        <Modal isOpen={confirmModal} onClose={() => setConfirmModal(false)} size="sm">
          <ModalHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-warning-50)] text-[var(--color-warning-600)]">
                <AlertIcon />
              </div>
              <ModalTitle>Potvrdite akciju</ModalTitle>
            </div>
          </ModalHeader>
          <ModalBody>
            <p className="text-[var(--color-text-secondary)]">
              Jeste li sigurni da želite nastaviti? Ova akcija može imati posljedice.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setConfirmModal(false)}>
              Otkaži
            </Button>
            <Button variant="primary" onClick={() => setConfirmModal(false)}>
              Potvrdi
            </Button>
          </ModalFooter>
        </Modal>

        {/* Delete Modal */}
        <Modal isOpen={deleteModal} onClose={() => setDeleteModal(false)} size="sm">
          <ModalHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-error-50)] text-[var(--color-error-600)]">
                <TrashIcon />
              </div>
              <div>
                <ModalTitle>Obriši stavku</ModalTitle>
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <p className="text-[var(--color-text-secondary)]">
              Jeste li sigurni da želite obrisati ovu stavku? Ova akcija se ne može poništiti.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setDeleteModal(false)}>
              Otkaži
            </Button>
            <Button variant="danger" onClick={() => setDeleteModal(false)}>
              Obriši
            </Button>
          </ModalFooter>
        </Modal>

        {/* Form Modal */}
        <Modal isOpen={formModal} onClose={() => setFormModal(false)} size="lg">
          <ModalHeader>
            <ModalTitle>Dodaj novu adresu</ModalTitle>
            <ModalDescription>
              Unesite podatke za novu adresu dostave.
            </ModalDescription>
          </ModalHeader>
          <ModalBody>
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-[var(--color-text-primary)]">
                  Ime i prezime
                </label>
                <input
                  type="text"
                  className="w-full rounded-[var(--radius-input)] border border-[var(--input-border)] bg-[var(--input-bg)] px-[var(--spacing-input-padding-x)] py-[var(--spacing-input-padding-y)] text-[var(--input-text)] focus:border-[var(--input-border-focus)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]/20"
                  placeholder="Ivan Horvat"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-[var(--color-text-primary)]">
                  Adresa
                </label>
                <input
                  type="text"
                  className="w-full rounded-[var(--radius-input)] border border-[var(--input-border)] bg-[var(--input-bg)] px-[var(--spacing-input-padding-x)] py-[var(--spacing-input-padding-y)] text-[var(--input-text)] focus:border-[var(--input-border-focus)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]/20"
                  placeholder="Ulica i broj"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-[var(--color-text-primary)]">
                    Grad
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-[var(--radius-input)] border border-[var(--input-border)] bg-[var(--input-bg)] px-[var(--spacing-input-padding-x)] py-[var(--spacing-input-padding-y)] text-[var(--input-text)] focus:border-[var(--input-border-focus)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]/20"
                    placeholder="Sarajevo"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-[var(--color-text-primary)]">
                    Poštanski broj
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-[var(--radius-input)] border border-[var(--input-border)] bg-[var(--input-bg)] px-[var(--spacing-input-padding-x)] py-[var(--spacing-input-padding-y)] text-[var(--input-text)] focus:border-[var(--input-border-focus)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]/20"
                    placeholder="71000"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-[var(--color-text-primary)]">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="w-full rounded-[var(--radius-input)] border border-[var(--input-border)] bg-[var(--input-bg)] px-[var(--spacing-input-padding-x)] py-[var(--spacing-input-padding-y)] text-[var(--input-text)] focus:border-[var(--input-border-focus)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]/20"
                  placeholder="+387 61 123 456"
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setFormModal(false)}>
              Otkaži
            </Button>
            <Button variant="primary" onClick={() => setFormModal(false)}>
              Spremi adresu
            </Button>
          </ModalFooter>
        </Modal>

        {/* Success Modal */}
        <Modal isOpen={successModal} onClose={() => setSuccessModal(false)} size="sm" showCloseButton={false}>
          <ModalBody className="text-center py-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-success-50)] text-[var(--color-success-600)]">
              <CheckIcon />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-[var(--color-text-primary)]">
              Uspješno!
            </h2>
            <p className="mb-4 text-[var(--color-text-secondary)]">
              Vaša narudžba je uspješno kreirana.
            </p>
            <Badge variant="success" size="lg">Narudžba #12345</Badge>
          </ModalBody>
          <ModalFooter className="justify-center border-t-0 bg-transparent">
            <Button variant="primary" onClick={() => setSuccessModal(false)}>
              U redu
            </Button>
          </ModalFooter>
        </Modal>
      </section>

      {/* Options */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Opcije
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" onClick={() => setNoCloseButton(true)}>
            Bez close buttona
          </Button>
          <Button variant="outline" onClick={() => setNoOverlayClose(true)}>
            Bez overlay close
          </Button>
        </div>

        <Modal isOpen={noCloseButton} onClose={() => setNoCloseButton(false)} showCloseButton={false}>
          <ModalHeader>
            <ModalTitle>Bez close buttona</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p className="text-[var(--color-text-secondary)]">
              Ovaj modal nema X button za zatvaranje. Koristi akcije u footeru.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="primary" onClick={() => setNoCloseButton(false)}>
              Zatvori
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={noOverlayClose} onClose={() => setNoOverlayClose(false)} closeOnOverlayClick={false}>
          <ModalHeader>
            <ModalTitle>Bez overlay close</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p className="text-[var(--color-text-secondary)]">
              Klik na overlay ne zatvara ovaj modal. Korisno za forme gdje ne želite slučajno zatvaranje.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="primary" onClick={() => setNoOverlayClose(false)}>
              Zatvori
            </Button>
          </ModalFooter>
        </Modal>
      </section>

      {/* Usage Code */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Korištenje
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`'use client'

import { useState } from 'react'
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
} from '@/src/components/ui/Modal'
import { Button } from '@/src/components/ui/buttons'

export function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Otvori modal
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="md"                    // 'sm' | 'md' | 'lg' | 'xl' | 'full'
        closeOnOverlayClick={true}   // default: true
        closeOnEscape={true}         // default: true
        showCloseButton={true}       // default: true
      >
        <ModalHeader>
          <ModalTitle>Naslov modala</ModalTitle>
          <ModalDescription>Opis modala</ModalDescription>
        </ModalHeader>
        <ModalBody>
          Sadržaj modala...
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Otkaži
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Potvrdi
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}`}
          </code>
        </pre>
      </section>

      {/* CSS Variables */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          CSS Varijable
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Modal varijable</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--color-bg-overlay: rgba(0,0,0,0.5)</code></li>
              <li><code>--color-bg-elevated</code></li>
              <li><code>--shadow-modal: var(--shadow-xl)</code></li>
              <li><code>--radius-modal: var(--radius-xl)</code></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Z-index</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--z-modal-backdrop: 1040</code></li>
              <li><code>--z-modal: 1050</code></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
