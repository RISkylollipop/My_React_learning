function Card(props) {

    const iphones = props.name
    const phoneCategory = props.category

    const iphonedetail = iphones.map((iphone) => (
        <div className="Card" key={iphone.id}>
            <img src={iphone.image} alt="" />
            <hr />
            <h3 className='cardHead'>{iphone.name}</h3>

            <p className='cardParagraph'>New Iphone Product, Uk Used</p>
        </div>
    ))


    return (
        <>
            <div className=" productHead text-5xl font-bold underline">
                {phoneCategory}
            </div>
            <div>
                {iphonedetail}
            </div>

        </>
    );
}


export default Card


