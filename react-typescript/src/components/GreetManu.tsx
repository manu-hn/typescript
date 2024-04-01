type GreetProp = {
    name: string
}

const GreetManu = (prop: GreetProp) => {

    return (
        <div>
            Hello {prop.name} How Are You
        </div>
    )
}

export default GreetManu;