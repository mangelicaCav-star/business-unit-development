# Operating Model and Process Architecture

```mermaid
flowchart TD
 A[Customer request] --> B[Legal entity and logistics assessment]
 B --> C[Supplier sourcing and preliminary costing]
 C --> D[Sales quotation]
 D --> E{Customer PO received?}
 E -- No --> F[Preliminary opportunity]
 E -- Yes --> G[Official budget and ERP project]
 G --> H[Requisition and Purchasing handoff]
 H --> I[Purchasing issues supplier PO]
 I --> J[Supplier and transport follow-up]
 J --> K[Warehouse records receipt]
 K --> L[Delivery confirmation]
 L --> M[Invoicing bills delivered goods]
 M --> N[Invoicing closes fully invoiced project]
 N --> O[Post-close cost reconciliation]
```

## Exceptions
Customer scope change: revised customer PO, versioned budget, same ERP project and new supplier PO for additional purchases.

Supplier price/date change: assess impact, coordinate with Finance and Purchasing for corrections, then verify.

Partial receipts: invoice only goods actually delivered, with customer agreement.

Questionable costs: request correction from entry owner; if unresolved, retain ERP-reported amount with annotation in monthly report.

Historical weekly project tracking used markers for purchases made, material received and invoicing requested. Follow-ups were via email.