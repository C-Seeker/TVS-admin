# Legacy document migration checklist

The root `index.html` is frozen as the reference for invoice, quotation, receipt, and scope-of-work output. A React replacement can retire a legacy document mode only after this checklist is completed.

## Data parity

- [ ] Client and company identity fields match.
- [ ] Document numbers and dates match.
- [ ] Line descriptions, quantities, rates, and ordering match.
- [ ] Discounts, VAT, withholding, subtotal, and grand total match.
- [ ] Payment terms, bank details, remarks, and legal terms match.
- [ ] Logos, stamps, signatures, and attachments render correctly.

## Visual parity

- [ ] Compare representative documents side by side at desktop width.
- [ ] Compare A4 print preview at 100% scale.
- [ ] Confirm page breaks do not split headings, totals, or signatures incorrectly.
- [ ] Confirm fonts, spacing, alignment, colors, borders, and numeric formatting.
- [ ] Confirm long client names, addresses, descriptions, and terms wrap safely.
- [ ] Confirm zero, large, decimal, VAT, and withholding values do not overflow.

## Output and browser coverage

- [ ] Print or save as PDF in current Chrome and Safari.
- [ ] Verify the PDF has selectable text and usable links.
- [ ] Verify desktop and narrow/mobile preview behavior.
- [ ] Verify quotation, invoice, receipt, and scope-of-work modes separately.

## Acceptance evidence

- [ ] Store sanitized before/after screenshots or PDFs with the pull request.
- [ ] Record any accepted visual differences and their rationale.
- [ ] Obtain product-owner approval.
- [ ] Remove the corresponding legacy code only in a later, dedicated change.
