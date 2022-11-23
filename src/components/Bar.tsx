interface Bar {
    title: string,
    detail: string
}

function Bar({title, detail}: Bar) {
    return (
        <div className="inline-flex text-white cursor-pointer justify-center items-center lg:px-5 px-1 lg:first-of-type:pl-6">
            <p className="rounded-lg padding-bar bg-white text-black">{title}</p>
            <p className="px-1">{detail}</p>
        </div>
    )
}

export default Bar
