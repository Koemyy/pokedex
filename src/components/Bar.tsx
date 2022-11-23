interface Bar {
    title: string,
    detail: string
}

function Bar({title, detail}: Bar) {
    return (
        <div className="absolute bottom-0 h-[50px] w-full bg-black justify-end items-center pr-12">
            <div className="flex text-white cursor-pointer">
                <p className="rounded-lg">{title}</p>
                <p>{detail}</p>
            </div>
        </div>
    )
}

export default Bar
