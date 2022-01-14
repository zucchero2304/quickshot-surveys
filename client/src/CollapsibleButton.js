import './CollapsibleButton.css'

export default function CollapsibleButton({ children, buttonText }) {

    const onCollapse = () => {
        var coll = document.getElementsByClassName("collapse-btn")[0]
        coll.classList.toggle("active")
        var content = coll.nextElementSibling
        if (content.style.display === "block") {
            content.style.display = "none"
        } else {
            content.style.display = "block"
        }
    }

    return (
        <>
            <button className="collapse-btn" onClick={onCollapse}>{buttonText}</button>
            <div className="collapse-content">
                {children}
            </div>
        </>
    )
}
