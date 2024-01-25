import Dashboard from '../dashboard/index';

const LayoutPage = ()=>{
    return(
        <main className='w-full'>
            <Dashboard/>
            <div>
                <div className='w-full h-2/5 bg-pale-green'></div>
            </div>
        </main>
    )
}

export default LayoutPage;