
import placeholder from "../../assets/placeholder.png"
import placeholder2 from "../../assets/placeholder2.png"
import business from "../../assets/businessmission.jpg"
import graphicdesign from "../../assets/graphic-designing.png"
import mediamanage from "../../assets/social-media-manage.png"
import advertisement from "../../assets/advertisement.png"
import marketing from "../../assets/marketing.png"
import webdev from "../../assets/web-dev.png"

export const images = {
    about:{
        img1: placeholder,
        img2: placeholder2,
        img3: business,
    },
    carousel:{
        carousel1:[
            { 
                src: graphicdesign,
                title: "Graphic Designing",
                details: "We create visually compelling designs that capture your brand’s identity, ensuring your social media content, logos, and marketing materials stand out and leave a lasting impression."
            },
            { 
                src: mediamanage,
                title: "Social Media Management",
                details: "From content scheduling to audience engagement, we handle all aspects of social media management, ensuring your brand remains active, relevant, and consistently connected with your audience."
            },
            { 
                src: advertisement,
                title: "Advertisement",
                details: "We craft targeted ad campaigns that maximize reach and engagement, helping businesses effectively promote their products or services across digital platforms such as Facebook Ads."
            },
            { 
                src: marketing,
                title: "Marketing Strategy",
                details: "Our strategic marketing approach focuses on increasing brand awareness and customer engagement through innovative campaigns, influencer collaborations, and data-driven insights."
            },
            { 
                src: webdev,
                title: "Web Development",
                details: "We design and develop user-friendly, responsive websites that enhance your brand’s online presence, ensuring a seamless and engaging experience for visitors."
            },
        ],
    }
};