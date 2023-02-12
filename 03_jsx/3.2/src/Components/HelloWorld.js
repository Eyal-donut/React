const data = ["hello", "world"]

const HelloWorld = () => {
    const joined = data.join(" ")
    return <h2>{joined}</h2>
}
export default HelloWorld