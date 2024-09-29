// Jai Shree Ram

function sheryEffect() {
    Shery.imageEffect(".back", {
        style: 5,
        gooey: true,
        config: {
            a: { value: 2, range: [0, 30] },
            b: { value: -0.991, range: [-1, 1] },
            aspect: { value: 2.089227386421023 },
            gooey: { value: true },
            infiniteGooey: { value: true },
            durationOut: { value: 1, range: [0.1, 5] },
            durationIn: { value: 1.5, range: [0.1, 5] },
            displaceAmount: { value: 0.5 },
            masker: { value: true },
            maskVal: { value: 1.4, range: [1, 5] },
            scrollType: { value: 0 },
            geoVertex: { range: [1, 64], value: 1 },
            noEffectGooey: { value: false },
            onMouse: { value: 1 },
            noise_speed: { value: 0.8, range: [0, 10] },
            metaball: { value: 0.2, range: [0, 2] },
            discard_threshold: { value: 0.5, range: [0, 1] },
            antialias_threshold: { value: 0, range: [0, 0.1] },
            noise_height: { value: 0.5, range: [0, 2] },
            noise_scale: { value: 10, range: [0, 100] }
        }

    })
}


function textEffect() {

    let headings = document.querySelectorAll(".heading")

    headings.forEach(function (heading) {

        let h1s = heading.querySelectorAll("h1")
        let index = 0
        let animating = false
        
    
        
        document.addEventListener("click", function () {

            if (!animating) {

                animating = true
    
                gsap.to(h1s[index], {
                    y: "-=100%",
                    duration: .8,
                    ease: Expo.easeInOut,
                    onComplete: function () {
                        gsap.set(this._targets[0], { top: "+=210%" })
                    }
                })
    
                index === h1s.length - 1 ? (index = 0) : index++;
    
                if (index !== 0) {
    
                    gsap.to(h1s[index], {
                        y: "-=102%",
                        duration: .8,
                        ease: Expo.easeInOut ,
                        onComplete: function () {
                            animating = false
                        }
                    })
    
                } else {
    
                    gsap.to(h1s[index], {
                        y: "-=99%",
                        duration: .8,
                        ease: Expo.easeInOut ,
                        onComplete: function () {
                            animating = false
                        }
                    })
    
                }
                
            }


        })
        

    })




}

sheryEffect()
textEffect()
