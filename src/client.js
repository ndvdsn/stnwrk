import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "fvwk0498",
    dataset: "production",
    apiVersion: '2022-11-28',
    useCdn: true,
})