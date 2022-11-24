interface Bar {
    title: string,
    detail: string
}

function Bar({title, detail}: Bar) {
    return (
        <div className="inline-flex text-white cursor-pointer justify-center items-center lg:pl-5 px-1">
            <p className="rounded-lg padding-bar bg-white text-black">{title}</p>
            <p className="lg:px-1">{detail}</p>
        </div>
    )
}

export default Bar
