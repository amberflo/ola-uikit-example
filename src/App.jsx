import { AmberfloProvider, InvoicesList, PrepaidSummaryGraph, UsageByMeterLineGraph } from "@amberflo/uikit";

function App() {

  return (
    <AmberfloProvider session='9cca2e7238001222c4449a667a8c312bd7f59435a520261aa07a970818d174cf6509185f0b981578432c'>
      <div  style={{ display: 'flex', flexDirection: 'column', width: '90%', marginLeft: '5%' }}>
        <div style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '32px'}}>
            Usage
          </p>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '50%', display: 'flex', flexDirection: 'column', marginRight: '5px' }}>
              <PrepaidSummaryGraph withTitle withContainer/>
              <div style={{ marginTop: '10px' }}>
                <InvoicesList withTitle withContainer/>
              </div>
            </div>

            <div style={{ width: '50%', marginLeft: '5px' }}>
              <UsageByMeterLineGraph
                withTitle
                withMeterSelector
                withContainer
                withDimensionsSelector
                //renderEmptyConfigOnError={true}
              />
            </div>
          </div>
        </div>
      </div>
    </AmberfloProvider>
  )
}

export default App
