async function API(File_Location) {
    const Data = await fetch(File_Location)
    const Response_Data = await Data.json()

    return Response_Data
}

export default API