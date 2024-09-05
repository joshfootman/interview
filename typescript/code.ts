const Features = ["point", "polygon", "radius"] as const

type UnionOfFeatures = (typeof Features)[number]
//         ?^ 'point' | 'polygon' | 'radius'

type MappedFeatureFunction = undefined
/*         ?^  { 
                 point: {
                   type: 'point-option',
                   onClick: () => void
                 },
                 polygon: {
                   type: 'polygon-option',
                   onClick: () => void
                 },
                 radius: {
                   type: 'radius-option',
                   onClick: () => void
                 },
               }
*/
