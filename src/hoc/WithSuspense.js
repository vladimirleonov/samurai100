import React, {Suspense} from 'react';

const WithSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<div>Загрузка...</div>}>
            <Component {...props}/>
        </Suspense>
    }
}

export default WithSuspense;