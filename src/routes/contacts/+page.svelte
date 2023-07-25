<main class="page-contacts">
    <section class="contacts-section">
        <div class="container mx-auto">
            <div class="md:pt-48 pt-24 pb-20 relative px-3">
                <span class="inline-block mb-6">Contact us</span>
                <h1>Get in Touch with Us and <br>Discover the Opportunities</h1>
                <div class="flex mt-[48px] mb-[64px] md:flex-row flex-col-reverse">
                    <div class="md:w-6/12 w-12/12 right">
                        <div class="form rounded-md">
                            <div class="row flex lg:flex-row flex-col">
                                <label for="">
                                    First name
                                    <input type="text" placeholder="Jacob">
                                </label>
                                <label for="">
                                    Last name
                                    <input type="text" placeholder="Williams">
                                </label>
                            </div>
                            <div class="row flex lg:flex-row flex-col">
                                <label for="">
                                    Company
                                    <input type="text" placeholder="Htmlstream">
                                </label>
                                <label for="">
                                    Subject
                                    <select name="">
                                        <option value="" disabled selected>Choose topic</option>
                                        <option value="">Subject</option>
                                        <option value="">Subject</option>
                                    </select>
                                </label>
                            </div>
                            <label for="">
                                Work email
                                <input type="email" name="" placeholder="email@site.com">
                            </label>
                            <label for="">
                                Details
                                <textarea name="" id="" cols="30" rows="10"
                                          placeholder="Tell us about your payment sales"></textarea>
                            </label>

                            <button>Send inquiry</button>

                        </div>
                    </div>
                    <div class="w-1/12"></div>
                    <div class="md:w-5/12 w-12-12 md:block flex flex-wrap gap-12 md:mb-0 mb-12 left">
                        <div class="single md:mb-[80px]">
                            <label>
                                Contact us by phone or location
                                <ul class="mt-[25px]">
                                    <li><img src="/images/pin.svg" alt=""><a href="https://www.google.lt/maps/place/Konstitucijos+pr.+7,+09307+Vilnius/data=!4m2!3m1!1s0x46dd9403fe06eb77:0x36ff6b8e047ee2b3?sa=X&ved=2ahUKEwjJvszGvKmAAxW5JhAIHcPXBLIQ8gF6BAgtEAA&ved=2ahUKEwjJvszGvKmAAxW5JhAIHcPXBLIQ8gF6BAguEAI">Konstitucijos av. 7, LT-09308 Vilnius</a></li>
                                    <li><img src="/images/phone.svg" alt=""><a href="tel:+370 668 97952">+370 668 97952</a></li>
                                    <li><img src="/images/mail.svg" alt=""><a href="mailto:office@baltvesta.lt">office@baltvesta.lt</a></li>
                                </ul>
                            </label>
                        </div>
                        <div class="single">
                            <label>
                                Interested in renting
                                <ul class="mt-[25px]">
                                    <li><img src="/images/pin.svg" alt=""><a href="https://www.google.lt/maps/place/Konstitucijos+pr.+7,+09307+Vilnius/data=!4m2!3m1!1s0x46dd9403fe06eb77:0x36ff6b8e047ee2b3?sa=X&ved=2ahUKEwjJvszGvKmAAxW5JhAIHcPXBLIQ8gF6BAgtEAA&ved=2ahUKEwjJvszGvKmAAxW5JhAIHcPXBLIQ8gF6BAguEAI">Konstitucijos av. 7, LT-09308 Vilnius</a></li>
                                    <li><img src="/images/phone.svg" alt=""><a href="tel:+370 668 97952">+370 668 97952</a></li>
                                    <li><img src="/images/mail.svg" alt=""><a href="mailto:office@baltvesta.lt">office@baltvesta.lt</a></li>
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
      .form {
        background: var(--white-color);
        padding: 32px 32px 74px 32px;
        display: flex;
        flex-direction: column;
        gap: 34px;

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