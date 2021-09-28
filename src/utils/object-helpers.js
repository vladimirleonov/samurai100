export const updateObjectInArray = (array, itemId, newPropsForObject) => {
    return (
        array.map((u) => {
            if(u.id === itemId) {
                return {
                    ...u,
                    ...newPropsForObject
                }
            } else {
                return u;
            }
        })
    )
}