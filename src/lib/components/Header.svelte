<script>
    import {onMount} from 'svelte';


    onMount(() => {

        const header = document.getElementById('header');
        window.addEventListener('scroll', function () {
            const scroll = window.pageYOffset || document.documentElement.scrollTop;
            if (scroll >= 1) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        if (window.pageYOffset >= 1) {
            header.classList.add('scrolled');
        }

        const ham = document.querySelector('.ham');
        const mobileNav = document.querySelector('.mobile-nav');
        const html = document.querySelector('html');

        document.querySelector('.ham').addEventListener('click', (e) => {
            ham.classList.toggle('active');
            mobileNav.classList.toggle('active');
            html.classList.toggle('nav-open');

            if (html.classList.contains('nav-open')) {
                // Add CSS to disable scrolling
                html.style.overflow = 'hidden';
            } else {
                // Remove CSS to re-enable scrolling
                html.style.overflow = '';
            }
        });

        document.querySelectorAll('.nav-link').forEach(value => {
            value.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                html.classList.remove('nav-open');
                html.style.overflow = '';
                ham.classList.remove('active');
            })
        })

        document.querySelector('.logo').addEventListener('click', () => {
            mobileNav.classList.remove('active');
            html.classList.remove('nav-open');
            html.style.overflow = '';
            ham.classList.remove('active');
        });

    });
</script>

<header id="header" class="header">
    <div class="container mx-auto">
        <div class="px-3">
            <div class="flex justify-between items-center">
                <a href="/en"><img class="logo" src="/images/logo.svg" alt=""></a>
                <ul class="lg:flex hidden">
                    <li>
                        <a class="link dark" href="/en/about">About us</a>
                    </li>
                    <li>
                        <a class="link dark" href="/en/about#forwardthinking">Investments</a>
                        <ul class="sub-menu rounded-md">
                            <li><a class="link" href="/en/about?activeTab=0#forwardthinking">Metal processing</a></li>
                            <li><a class="link" href="/en/about?activeTab=1#forwardthinking">Real estate</a></li>
                        </ul>
                    </li>
                    <li>
                        <a class="link dark" href="/en/exits">Success stories</a>
                    </li>
                    <li>
                        <a class="link dark" href="/en/contacts">Contact us</a>
                    </li>
                </ul>
                <div class="ham lg:hidden flex">
                    <div class="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="mobile-nav lg:hidden flex">
    <div class="container mx-auto">
        <div class="px-3">
            <ul class="flex flex-col gap-6">
                <li>
                    <a class="nav-link" href="/en/about">About us</a>
                </li>
                <li>
                    <a class="nav-link" href="/en/about#forwardthinking">Investments</a>
                </li>
                <li>
                    <a class="nav-link" href="/en/exits">Success stories</a>
                </li>
                <li>
                    <a class="nav-link" href="/en/contacts">Contact us</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<style lang="scss">


  .header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;
    padding-top: 25px;
    transition: var(--tr-all);
    //.container {
    //  @media screen and (min-width: 1536px) {
    //    max-width: 1920px;
    //    h1 {
    //      font-size: 4.5rem;
    //    }
    //    p {
    //      font-size: 1.5rem;
    //    }
    //    .image-container {
    //      height: 45rem;
    //    }
    //  }
    //}
    &.logo {
      max-width: 183px;
      @media screen and (max-width: 500px){
        max-width: 120px;
      }
    }

    ul {
      gap: 34px;
      margin: 0;
      li {
        position: relative;
        &:before {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          height: 20px;
          width: 100%;
        }

        .sub-menu {
          list-style: none;
          position: absolute;
          top: 100%;
          left: -50%;
          width: max-content;
          background: var(--white-color);
          padding: 23px 20px;
          z-index: 100;
          overflow: hidden;
          transform: translateY(40px);
          transform-origin: top left;
          transition: all 0.3s ease-in-out;
          opacity: 0;
          visibility: hidden;
          display: flex;
          flex-direction: column;
          gap: 10px;
          .top {
            .heading {
              display: none;
            }
          }

          li {
            //padding: 0 8px;
            padding: 0;

            &:first-of-type {
              a {

              }
            }

            a {
              //color: $green;
              display: inline-block;
              align-items: center;
              gap: 22px;
            }
          }
        }
        &:hover {
          .sub-menu {
            transform: translateY(10px);
            opacity: 1;
            visibility: visible;
          }
        }
      }
    }
    &:global(.scrolled) {
      padding-top: 13.5px;
      padding-bottom: 13.5px;
      background: var(--blue-color);
    }
  }

  .ham {
    width: 38px;
    height: 38px;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    .lines {
      width: 14px;
      height: 10px;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all 0.3s ease-in-out;

      span {
        position: absolute;
        width: 24px;
        height: 2px;
        background: rgba(41, 39, 41, 0.6);
        border-radius: 20px;
        width: 100%;
        transition: all 0.3s ease-in-out;
        &:nth-of-type(1) {

        }
        &:nth-of-type(2) {
          top: 50%;
          transform: translateY(-50%);
        }
        &:nth-of-type(3) {
          bottom: 0;
        }
      }
    }
    &:global(.active) {
      .lines {
        height: 16px;
        @media screen and (max-width: 500px) {
          height: 16px;
        }
      }
      .lines span:nth-of-type(1) {
        transform: rotate(45deg);
        transform-origin: left;
        width: 20px;
        @media screen and (max-width: 500px) {
          width: 20px;
        }
      }
      .lines span:nth-of-type(2) {
        opacity: 0;
      }
      .lines span:nth-of-type(3) {
        transform: rotate(-45deg);
        transform-origin: left;
        width: 20px;
        @media screen and (max-width: 500px) {
          width: 20px;
        }
      }
    }
  }

  .mobile-nav {
    flex-direction: column;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background: var(--blue-color);
    z-index: 100;
    transform: translateX(100%);
    transition: all 0.3s ease-in-out;
    &:global(.active) {
      transform: translateX(0);
    }
    .content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .navigation {
        flex-grow: 1;
        display: flex;
        padding: 120px 0 100px 0;
      }
      .absolut {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        .buttons {
          margin-bottom: 30px;
          .container {
            display: flex;
            justify-content: flex-start;
            gap: 10px;
            flex-wrap: wrap;
          }
        }
        .line {
          padding: 15px 0;
          background: var(--blue-color);
        }
      }

      .container {

        .navtop {
          margin-bottom: 40px;
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
            li {
              margin-bottom: 20px;
              &:last-of-type {
                margin-bottom: 0;
              }
              a {
                font-size: 30px;
                line-height: 1.2;
                color: var(--blue-color);
                font-weight: 400;
              }
            }
          }
        }
        .navbottom {
          margin-bottom: 40px;
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
            li {
              margin-bottom: 20px;
              &:last-of-type {
                margin-bottom: 0;
              }
              a {
                font-size: 20px;
                line-height: 1.2;
                color: var(--blue-color);
                font-weight: 400;
              }
            }
          }
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          column-gap: 10px;
          row-gap: 20px;
        }
      }
    }

  }


</style>