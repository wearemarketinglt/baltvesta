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

        if (!formData.name || !formData.email || !formData.company) {
            responseMessage = 'Prašome užpildyti visus laukelius.';
            toggleResponse()
            return
        }

        const res = await fetch(form.action, {
            method: 'POST',
            body: data
        })

        if (res.status === 200) {
            form.classList.add('hidden')
            formResponse.classList.add('visible')
        } else {
            responseMessage = 'Kažkas nutiko. Pabandykite dar kartą vėliau.'
            toggleResponse()
        }
    }
</script>

<svelte:head>
    <title>Contact us</title>
    <meta name="description" content="Get in touch with us now and discover various international opportunities!"/>
</svelte:head>

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
                                    <div class="select-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                                            <path d="M1 1.14062L5.5 5.64062L10 1.14062" stroke="#033546" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <select id="select" name="select">
                                            <option value="Choose topic" disabled selected>Choose topic</option>
                                            <option value="Investment proposal">Investment proposal</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <label for="email">
                                Work email
                                <input id="email" name="email" type="email" placeholder="email@site.com">
                            </label>
                            <label for="details">
                                Details
                                <textarea name="details" id="details" cols="30" rows="10"
                                          placeholder="Tell us about your investment proposal"></textarea>
                            </label>

                            <button>Send inquiry</button>

                        </form>
                        <h2 bind:this={formResponse} class="response text-white text-center absolute">Thank You!</h2>
                    </div>
                    <div class="w-1/12"></div>
                    <div class="md:w-5/12 w-12-12 md:block flex flex-wrap gap-12 md:mb-0 mb-12 left">
                        <div class="single md:mb-[80px]">
                            <label>
                                Contact us by phone or location
                                <ul class="mt-[25px]">
                                    <li><img src="/images/pin.svg" alt=""><a
                                            href="https://www.google.lt/maps/place/Konstitucijos+pr.+7,+09307+Vilnius/data=!4m2!3m1!1s0x46dd9403fe06eb77:0x36ff6b8e047ee2b3?sa=X&ved=2ahUKEwjJvszGvKmAAxW5JhAIHcPXBLIQ8gF6BAgtEAA&ved=2ahUKEwjJvszGvKmAAxW5JhAIHcPXBLIQ8gF6BAguEAI">Konstitucijos
                                        av. 7, LT-09308 Vilnius, Lithuania</a></li>
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
        transition: all 0.5s ease-in-out;

        &:global(.hidden) {
          opacity: 0;
        }

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
          font-weight: 500;
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

        .select-wrap {
          margin-top: 10px;
          display: flex;
          height: 100%;
          position: relative;
          svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 9px;
            right: 16px;
          }
        }
        select {

          -webkit-appearance: none;
          -moz-appearance: none;
        }

        button {
          background: var(--darkblue-color);
          color: var(--white-color);
          padding: 15px;
          border-radius: 10px;
        }
      }

      .response {
        opacity: 0;
        transition: all 0.5s ease-in-out;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);

        &:global(.visible) {
          opacity: 1;
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