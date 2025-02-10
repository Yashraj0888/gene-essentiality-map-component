## <mark> Major release with added new features.
#### Step 1 - Import the package
```js
import { GeneEssentialityChart } from 'gene-essentiality-chart'
``` 

<mark> *Note: Tailwind CSS is required for proper styling of this component.* </mark>

Example:
```js
import { useState } from "react"
import { GeneSearchForm } from "./Form"
import { GeneEssentialityChart } from "gene-essentiality-chart"

export default function MainGeneMap() {
  const [ensemblId, setEnsemblId] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  return (
    <div className="space-y-4">
      <GeneEssentialityChart
        ensemblId={ensemblId}
        setLoading={setLoading}
        setError={setError}
      />
    </div>
  )
}
```

### Features
- Search by:
  - Tissue
  - Cell Line
  - Disease
  - Expression
  - DepMap ID
- Sort by:
  - Neutral
  - Dependency
  - Highlighted Neutral
  - Highlighted Dependency
  - Tissue name

## Testing

The app should be tested with the following genes:

- BRCA1 (ENSG00000012048)
- BRCA2 (ENSG00000139618)
- TP53 (ENSG00000141510)
- EGFR (ENSG00000146648)

Ensure the following:
- The gene essentiality map renders correctly.
- The tooltip displays relevant data when hovering over the plot.
- Errors are handled gracefully, especially for invalid EnsemblIDs.