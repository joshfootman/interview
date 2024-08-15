const Features = ["point", "polygon", "radius"] as const

type UnionOfFeatures = undefined
//         ?^ 'point' | 'polygon' | 'radius'

type MappedFeatureFunction = undefined
//         ?^ { point: () => void; polygon: () => void; radius: () => void }
