<script>
    let formResponse;
    let showResponse = false;
    let responseMessage;

    const toggleResponse = () => showResponse = !showResponse

    const sendForm = async (e) => {

        const form = e.target
        const data = new FormData(form)

        const formData = {
            name: data.get('name'),
            email: data.get('email'),
            company: data.get('company')
        }

        if(!formData.name || !formData.email || !formData.company) {
            responseMessage = 'Prašome užpildyti visus laukelius.';
            toggleResponse()
            return
        }

        const res = await fetch(form.action, {
            method: 'POST',
            body: data
        })

        if(res.status === 200) {
            form.style.visibility = 'hidden'
            formResponse.style.visibility = 'visible'
        } else {
            responseMessage = 'Kažkas nutiko. Pabandykite dar kartą vėliau.'
            toggleResponse()
        }
    }
</script>

<main class="page-contacts">
    <section class="contacts-section">
        <div class="container mx-auto">
            <div class="md:pt-48 pt-24 pb-20 relative px-3">
                <span class="inline-block mb-6 uppercase">Contact us</span>
                <h1>Get in Touch with Us and <br>Discover the Opportunities</h1>
                <div class="flex mt-[48px] mb-[64px] md:flex-row flex-col-reverse">
                    <div class="md:w-6/12 w-12/12 right">
                        <form class="form rounded-md" method="POST" on:submit|preventDefault={sendForm}>
                            <div class="row flex lg:flex-row flex-col">
                                <label for="name">
                                    First name
                                    <input id="name" name="name" type="text" placeholder="Jacob">
                                </label>
                                <label for="surname">
                                    Last name
                                    <input id="surname" name="surname" type="text" placeholder="Williams">
                                </label>
                            </div>
                            <div class="row flex lg:flex-row flex-col">
                                <label for="company">
                                    Company
                                    <input id="company" name="company" type="text" placeholder="Htmlstream">
                                </label>
                                <label for="select">
                                    Subject
                                    <select id="select" name="select">
                                        <option value="" disabled selected>Choose topic</option>
                                        <option value="">Subject</option>
                                        <option value="">Subject</option>
                                    </select>
                                </label>
                            </div>
                            <label for="email">
                                Work email
                                <input id="email" name="email" type="email" placeholder="email@site.com">
                            </label>
                            <label for="details">
                                Details
                                <textarea name="details" id="details" cols="30" rows="10"
                                          placeholder="Tell us about your payment sales"></textarea>
                            </label>

                            <button>Send inquiry</button>

                        </form>
                        <p bind:this={formResponse} class="text-white text-center invisible absolute top-[40%]">Thank You!</p>
                    </div>
                    <div class="w-1/12"></div>
                    <div class="md:w-5/12 w-12-12 md:block flex flex-wrap gap-12 md:mb-0 mb-12 left">
                        <div class="single md:mb-[80px]">
                            <label>
                                Contact us by phone or location
                                <ul class="mt-[25px]">
                                    <li><img src="/images/pin.svg" alt=""><a
                                            href="https://www.google.lt/maps/place/Konstitucijos+pr.+7,+09307+Vilnius/data=!4m2!3m1!1s0x46dd9403fe06eb77:0x36ff6b8e047ee2b3?sa=X&ved=2ahUKEwjJvszGvKmAAxW5JhAIHcPXBLIQ8gF6BAgtEAA&ved=2ahUKEwjJvszGvKmAAxW5JhAIHcPXBLIQ8gF6BAguEAI">Konstitucijos
                                        av. 7, LT-09308 Vilnius</a></li>
                                    <li><img src="/images/phone.svg" alt=""><a href="tel:+370 668 97952">+370 668
                                        97952</a></li>
                                    <li><img src="/images/mail.svg" alt=""><a href="mailto:office@baltvesta.lt">office@baltvesta.lt</a>
                                    </li>
                                </ul>
                            </label>
                        </div>
                        <div class="single">
                            <label>
                                Interested in renting
                                <ul class="mt-[25px]">
                                    <li><img src="/images/pin.svg" alt=""><a
                                            href="https://www.google.lt/maps/place/Konstitucijos+pr.+7,+09307+Vilnius/data=!4m2!3m1!1s0x46dd9403fe06eb77:0x36ff6b8e047ee2b3?sa=X&ved=2ahUKEwjJvszGvKmAAxW5JhAIHcPXBLIQ8gF6BAgtEAA&ved=2ahUKEwjJvszGvKmAAxW5JhAIHcPXBLIQ8gF6BAguEAI">Konstitucijos
                                        av. 7, LT-09308 Vilnius</a></li>
                                    <li><img src="/images/phone.svg" alt=""><a href="tel:+370 668 97952">+370 668
                                        97952</a></li>
                                    <li><img src="/images/mail.svg" alt=""><a href="mailto:office@baltvesta.lt">office@baltvesta.lt</a>
                                    </li>
                                </ul>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<style lang="scss">
  .contacts-section {
    background: var(--blue-color);

    .right {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: var(--darkblue-color);
        border-radius: 0.375rem;
        right: -23px;
        top: 23px;
        z-index: 0;
      }

      .form {
        background: var(--white-color);
        padding: 32px 32px 74px 32px;
        display: flex;
        flex-direction: column;
        gap: 34px;
        position: relative;


        .row {
          gap: 24px;
        }

        label {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        input, textarea, select {
          border: 1px solid rgba(0, 34, 28, 0.10);
          padding: 10px 16px;
          border-radius: 5px;
          line-height: 1;
          width: 100%;
        }

        input, textarea {
          margin-top: 10px;

          &::placeholder {
            font-size: 16px;
          }
        }

        textarea {
          height: 116px;
        }

        select {
          margin-top: 10px;
        }

        button {
          background: var(--darkblue-color);
          color: var(--white-color);
          padding: 15px;
          border-radius: 10px;
        }
      }
    }

    .left {
      .single {
        .label {
          font-size: 18px;
        }

        ul {
          li {
            display: flex;
            align-items: center;
            gap: 10px;

            img {
              max-width: 20px;
            }

            &:not(:last-child) {
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
</style>