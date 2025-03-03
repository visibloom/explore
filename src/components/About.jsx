import placeholder from "../assets/placeholder.png"
import placeholder2 from "../assets/placeholder2.png"

export default function About(){
    return(
        <>
        <div className="mt-8 min-h-screen text-black">
            <div className="mx-44">
                <h2 className="subheading">ABOUT US</h2>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, fugit eius, ratione maxime at sint pariatur autem, ducimus explicabo officia culpa. Aspernatur itaque quaerat amet veniam laudantium! Maiores, iste? Id nisi incidunt repellat ducimus error aut culpa modi tenetur architecto ipsum omnis, quae et aliquid voluptatibus minus, hic qui, iusto nihil distinctio vitae molestias repellendus nulla. Quo atque quasi consequatur, quos omnis soluta, odit cumque officiis, fuga rem repellat velit minus aliquam neque natus reiciendis provident laboriosam eaque sequi voluptates.</p>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odit dolor! Eum aut, voluptas eius molestias praesentium hic eligendi nostrum veritatis deserunt, maiores fuga eveniet cum qui doloremque quis vitae accusamus repellat. Maiores quod eaque perspiciatis aspernatur molestias neque non voluptatum harum quis illo explicabo, tempora rem nam? Ad obcaecati ipsam fuga omnis sapiente beatae voluptatum esse explicabo error dolor?</p>
                <div className="visi-divider" style={{background: `url(${placeholder})`}}>Spread the beauty and artistic nature your posts and contents!</div>
                <div className="grid grid-cols-2 gap-4 mt-20">
                    <div className="p-20">
                        <p className="quote">" The only way to see the colors is to look within the heart with an open mind. "</p>
                        <p className="quoter">- Arthur Placeholder</p>
                    </div>
                    <div>
                        <img src={placeholder2} className="w-auto rounded-2xl" alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-20">
                    <div>
                        <img src={placeholder2} className="w-auto rounded-2xl" alt="" />
                    </div>
                    <div className="pl-10">
                        <p className="subtitle">Our Team.</p>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta debitis quis magni praesentium necessitatibus ad? Dolores est sed magnam?</p>
                        <div className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod saepe voluptatem atque architecto similique inventore unde exercitationem debitis. Quaerat temporibus placeat sint mollitia quidem cumque, ullam dolorem distinctio repellat?</div>
                        <div className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis iste harum! Temporibus, eos quia deleniti soluta non magnam ducimus?</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}