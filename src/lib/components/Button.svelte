<script>
    export let href;
</script>

<a href="{href}" class="button--hyperion">
    <span><span><slot/></span></span>
</a>

<style lang="scss">
  @keyframes MoveUpInitial {
    to {
      transform: translate3d(0, -105%, 0);
    }
  }

  @keyframes MoveUpEnd {
    from {
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  .button--hyperion {
    font-weight: 400;
    padding: 12px 24px;
    border: 1px solid var(--darkblue-color);
    color: var(--darkblue-color);
    position: relative;
    background: transparent;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    span {
      display: block;
      position: relative;
      color: var(--white-color);
    }

    > span {
      overflow: hidden;

      > span {
        overflow: hidden;
      }
    }

    &:hover {

      > span {

        > span {
          animation: MoveUpInitial 0.2s forwards, MoveUpEnd 0.2s forwards 0.2s;
            color: var(--darkblue-color);
        }
      }

      &::before {
        transform: scale3d(0, 1, 1);
        transform-origin: 0% 50%;
        color: var(--darkblue-color);
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--darkblue-color);
      color: var(--darkblue-color);
      transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
      transform-origin: 100% 50%;
    }
  }
</style>