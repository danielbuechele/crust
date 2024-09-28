import styles from "./page.module.css";
import PageHeader from "@/components/PageHeader/PageHeader";
import Table, { Row } from "@/components/Table/Table";

export default function About() {
  return (
    <>
      <PageHeader
        title="About"
        lead="We are a team of designers and engineers, coming together with a shared
        vision: to revolutionize the way people experience spices in their
        kitchens."
      />
      <Table className={styles.table}>
        <Row title="Our Story and Values">
          <p className={styles.lead}>
            Our journey began in a small kitchen, where friends shared a passion
            for cooking. We noticed that while we had access to a myriad of
            spices and herbs, the tools we used to grind them were often
            overlooked. We felt that something as fundamental as a pepper and
            salt grinder deserved the same level of attention and craftsmanship
            as any other kitchen tool.
          </p>
          <p className={styles.lead}>
            Driven by this idea, we embarked on a mission to create the perfect
            grinder—one that combines functionality, durability, and elegance.
          </p>
          <p className={styles.lead}>
            We believe in creating products that stand the test of time,
            meticulously crafting each grinder with high-quality materials and
            precision engineering for exceptional performance and durability.
          </p>
          <p className={styles.lead}>
            Committed to minimizing environmental impact, our refillable,
            long-lasting grinders reduce waste and use sustainably sourced
            materials and eco-friendly manufacturing processes. Designed to be
            both functional and aesthetically pleasing, our grinders are easy to
            use and maintain, adding a touch of elegance to any kitchen.
          </p>
          <p className={styles.lead}>
            Our love for cooking drives us to create the best possible tools for
            the kitchen. We believe that great food starts with the right
            ingredients and the right tools, and we are dedicated to helping our
            customers elevate their culinary creations.
          </p>
          <div className={styles.labels}>
            <div className={styles.label}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="california">
                  <g id="Subtract">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.0211 2.53343C29.7985 2.24233 29.5093 2.00889 29.178 1.85263C27.8383 1.2026 26.3445 0.937013 24.8628 1.08553C23.38 1.23417 21.9676 1.79168 20.7831 2.69586C20.2407 3.10299 19.813 3.58118 19.4754 4.08603C19.0593 3.66791 18.5986 3.29361 18.1 2.97045C16.965 2.23473 15.668 1.78615 14.3209 1.66338C14.2838 1.65999 14.2465 1.65827 14.2092 1.65822C12.9534 1.65653 11.7004 1.77535 10.4674 2.01302L10.4464 2.01725C10.0487 2.101 9.68035 2.2889 9.3791 2.56173C9.07785 2.83456 8.8545 3.18253 8.73188 3.57002C8.60927 3.95752 8.5918 4.37063 8.68127 4.76709C8.77041 5.1621 8.96251 5.52645 9.23802 5.82315L10.3585 7.03963C8.95069 7.45996 7.68522 8.26633 6.70797 9.37114C5.64508 10.5728 4.97421 12.0697 4.78432 13.662C4.72048 14.0272 4.74591 14.4028 4.85887 14.7566C4.97823 15.1305 5.19136 15.4676 5.47794 15.7358C5.76452 16.004 6.115 16.1943 6.49599 16.2886C6.87642 16.3828 7.2746 16.3781 7.6527 16.275L7.65435 16.2746L15.9475 14.0235L10.0265 32.4531H12.6524L18.6471 13.7939L19.1946 13.9731L18.2343 32.4531H20.7377L21.6561 14.7788L28.9997 17.1826C29.3806 17.3094 29.7882 17.3342 30.1818 17.2545C30.5772 17.1745 30.9445 16.9917 31.2469 16.7247C31.5493 16.4577 31.7761 16.1158 31.9044 15.7333C32.027 15.3681 32.0557 14.9782 31.9884 14.5994C31.784 13.0266 31.1078 11.5521 30.0485 10.3707C29.2291 9.45681 28.2104 8.75175 27.0775 8.30615L29.8115 5.55713C30.0729 5.29884 30.2684 4.98146 30.3815 4.63171C30.4956 4.27889 30.5224 3.90366 30.4597 3.5382C30.3969 3.17274 30.2464 2.82796 30.0211 2.53343ZM20.9593 6.79945C20.9532 6.82413 20.9463 6.84862 20.9387 6.87288C20.8955 7.0305 20.8585 7.18964 20.8272 7.34879C20.7662 7.65891 20.73 7.95193 20.7092 8.20777C21.6456 7.88078 22.7785 7.67902 24.1191 7.73553L27.8433 3.99093C26.9841 3.62407 26.0447 3.4796 25.1122 3.57307C24.0887 3.67566 23.1138 4.06086 22.2967 4.68562L22.2867 4.69316C21.6074 5.20189 21.196 5.97656 20.9593 6.79945ZM16.7402 5.0683C17.4019 5.4972 17.9685 6.05474 18.4072 6.70606C18.3956 6.76002 18.3846 6.81331 18.3743 6.86586C18.2654 7.41902 18.2166 7.92439 18.1964 8.32506C16.8122 7.21678 15.1493 6.73016 13.4281 6.68198L11.3246 4.39834C12.2573 4.2405 13.2017 4.16016 14.1481 4.15824C15.0719 4.2511 15.9606 4.56298 16.7402 5.0683ZM12.9654 9.17597C12.9321 9.1783 12.8988 9.1793 12.8656 9.17898C12.375 9.19679 11.8645 9.25924 11.3374 9.36365C10.2705 9.6241 9.30843 10.2046 8.58053 11.0275C7.89371 11.804 7.44656 12.761 7.29054 13.7829L17.0287 11.1396L17.2141 10.8303C16.1449 9.64729 14.6798 9.13478 12.9654 9.17597ZM24.4605 10.2638C24.4749 10.2655 24.4893 10.2668 24.5037 10.268C24.8064 10.2979 25.1252 10.3446 25.4605 10.411C26.5132 10.6653 27.464 11.2331 28.1872 12.0397C28.861 12.7912 29.3074 13.7167 29.4771 14.7084L20.9132 11.9051C20.8927 11.8978 20.8719 11.891 20.8509 11.8847L19.8394 11.5536C20.0468 11.3663 20.3342 11.1445 20.7081 10.9367C21.4867 10.5041 22.7005 10.0984 24.4605 10.2638Z"
                      fill="#FC4C02"
                    />
                    <path
                      d="M10.9692 34.9531H10.907C10.9278 34.9536 10.9486 34.9536 10.9692 34.9531Z"
                      fill="#FC4C02"
                    />
                  </g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.04688 33.7031C1.04688 33.0128 1.60652 32.4531 2.29688 32.4531H33.7031C34.3935 32.4531 34.9531 33.0128 34.9531 33.7031C34.9531 34.3935 34.3935 34.9531 33.7031 34.9531H2.29688C1.60652 34.9531 1.04688 34.3935 1.04688 33.7031Z"
                    fill="#FE9467"
                  />
                </g>
              </svg>

              <strong>Designed in</strong>
              <p>California</p>
            </div>
            <div className={styles.label}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.9844 13.858C24.5367 14.2722 24.6486 15.0557 24.2344 15.608L18.6776 23.0171C18.48 23.2801 18.2278 23.4983 17.939 23.6556C17.6501 23.8129 17.3308 23.9063 17.0027 23.9296C16.6745 23.9528 16.3453 23.9053 16.0371 23.7902C15.729 23.6752 15.4492 23.4953 15.2166 23.2628C15.2165 23.2628 15.2166 23.2628 15.2166 23.2628L11.8819 19.9296C11.3937 19.4415 11.3935 18.65 11.8816 18.1618C12.3696 17.6735 13.1611 17.6734 13.6493 18.1614L16.8185 21.3292L22.2344 14.108C22.6486 13.5557 23.4321 13.4438 23.9844 13.858ZM16.9841 21.4948C16.984 21.4947 16.9841 21.4948 16.9841 21.4948V21.4948Z"
                  fill="#FE9467"
                />
                <path
                  d="M17.9596 34.91C17.1596 34.91 16.3896 34.64 15.7596 34.13C15.5596 33.97 15.3796 33.79 15.2196 33.59L13.1096 30.97C12.8896 30.7 12.5496 30.56 12.1996 30.59L8.84959 30.95C7.91959 31.05 6.99959 30.79 6.25959 30.2C5.51959 29.61 5.05959 28.78 4.95959 27.84C4.92959 27.58 4.92959 27.31 4.95959 27.05L5.31959 23.7C5.35959 23.35 5.21959 23.01 4.93959 22.79L2.31959 20.68C1.58959 20.09 1.12959 19.25 1.01959 18.32C0.909592 17.39 1.18959 16.46 1.77959 15.73C1.93959 15.53 2.11959 15.35 2.31959 15.19L4.94959 13.08C5.21959 12.86 5.36959 12.52 5.32959 12.17L4.96959 8.82002C4.74959 6.89002 6.14959 5.15002 8.07959 4.93002C8.33959 4.90002 8.59959 4.90002 8.85959 4.93002L12.2096 5.29002C12.5596 5.33002 12.8996 5.19002 13.1196 4.91002L15.2296 2.30002C15.8196 1.57002 16.6596 1.11002 17.5996 1.01002C18.5296 0.910019 19.4496 1.18002 20.1896 1.77002C20.3896 1.93002 20.5696 2.11002 20.7296 2.31002L22.8396 4.94002C23.0596 5.22002 23.4096 5.35002 23.7496 5.32002L27.0996 4.96002C28.0296 4.86002 28.9496 5.12002 29.6896 5.71002C30.4296 6.30002 30.8896 7.14002 30.9896 8.07002C31.0196 8.33002 31.0196 8.59002 30.9896 8.85002L30.6296 12.2C30.5896 12.55 30.7296 12.89 31.0096 13.11L33.6396 15.22C35.1496 16.44 35.3896 18.66 34.1796 20.18C34.0196 20.38 33.8396 20.56 33.6496 20.72L31.0096 22.83C30.7396 23.05 30.5996 23.39 30.6396 23.74L30.9996 27.09C31.2196 29.02 29.8196 30.76 27.8896 30.98C27.6296 31.01 27.3696 31.01 27.1096 30.98L23.7596 30.62C23.4196 30.58 23.0696 30.72 22.8496 31L20.7496 33.62C20.1596 34.35 19.3196 34.81 18.3896 34.92C18.2596 34.93 18.1296 34.94 17.9996 34.94L17.9596 34.91ZM12.3096 28.08C13.3696 28.08 14.3796 28.56 15.0596 29.4L17.1696 32.02C17.2196 32.08 17.2696 32.13 17.3296 32.18C17.5396 32.35 17.8096 32.43 18.0796 32.4C18.3496 32.37 18.5996 32.24 18.7696 32.02L20.8696 29.4C21.6196 28.46 22.7996 27.97 23.9996 28.1L27.3496 28.46C27.4296 28.46 27.5096 28.46 27.5796 28.46C28.1396 28.4 28.5396 27.89 28.4796 27.33L28.1196 23.98C27.9896 22.78 28.4696 21.61 29.4196 20.85L32.0596 18.75C32.1096 18.71 32.1696 18.65 32.2096 18.6C32.5596 18.16 32.4896 17.51 32.0496 17.16L29.4296 15.05C28.4896 14.3 27.9996 13.13 28.1296 11.92L28.4996 8.57002C28.4996 8.49002 28.4996 8.42002 28.4996 8.34002C28.4696 8.07002 28.3296 7.82002 28.1196 7.65002C27.9096 7.48002 27.6396 7.41002 27.3696 7.43002L24.0196 7.80002C22.8196 7.93002 21.6496 7.45002 20.8896 6.50002L18.7796 3.88002C18.7296 3.82002 18.6796 3.77002 18.6296 3.73002C18.4196 3.56002 18.1496 3.48002 17.8796 3.51002C17.6096 3.54002 17.3596 3.67002 17.1896 3.89002L15.0796 6.50002C14.3196 7.44002 13.1596 7.92002 11.9496 7.79002L8.59959 7.43002C8.51959 7.43002 8.43959 7.43002 8.36959 7.43002C8.09959 7.46002 7.85959 7.59002 7.68959 7.81002C7.51959 8.02002 7.43959 8.29002 7.46959 8.56002L7.82959 11.91C7.95959 13.11 7.47959 14.28 6.52959 15.04L3.90959 17.15C3.84959 17.2 3.79959 17.25 3.74959 17.31C3.57959 17.53 3.49959 17.79 3.52959 18.06C3.55959 18.33 3.68959 18.58 3.90959 18.75L6.52959 20.86C7.46959 21.62 7.95959 22.79 7.82959 23.99L7.46959 27.34C7.46959 27.42 7.46959 27.5 7.46959 27.57C7.49959 27.84 7.63959 28.08 7.84959 28.25C8.05959 28.42 8.32959 28.5 8.59959 28.47L11.9496 28.11C12.0796 28.1 12.2096 28.09 12.3296 28.09L12.3096 28.08Z"
                  fill="#FC4C02"
                />
              </svg>
              <strong>Manufactured in</strong>
              <p>Germany</p>
            </div>
            <div className={styles.label}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.9022 1.41915C18.6674 1.18186 18.3475 1.04834 18.0136 1.04834C17.6798 1.04834 17.3599 1.18187 17.1251 1.41916C15.2582 3.30597 13.9599 5.67999 13.3786 8.26985C13.07 9.64445 12.9701 11.0504 13.076 12.4416C11.1056 11.2478 8.83196 10.597 6.48958 10.5874C6.15802 10.5861 5.83949 10.7165 5.60411 10.95C5.36872 11.1835 5.23575 11.501 5.23447 11.8326C5.22132 15.2299 6.55809 18.4934 8.95081 20.9052C11.0497 23.0209 13.8104 24.3294 16.75 24.6282V28.4702C16.75 29.1606 17.3096 29.7202 18 29.7202C18.6904 29.7202 19.25 29.1606 19.25 28.4702V24.6283C20.5049 24.5008 21.7363 24.1885 22.904 23.6996C24.4559 23.0498 25.8646 22.1006 27.0497 20.9063C28.2347 19.712 29.173 18.296 29.8108 16.7392C30.4487 15.1823 30.7736 13.515 30.7671 11.8326C30.7644 11.1422 30.2026 10.5848 29.5123 10.5874C27.8298 10.5939 26.1651 10.9317 24.6132 11.5816C24.0388 11.8221 23.4839 12.1037 22.9528 12.4235C23.0572 11.0282 22.9545 9.61836 22.6422 8.24055C22.0576 5.66189 20.7619 3.2987 18.9022 1.41915ZM14.1137 16.5142C14.0968 16.4965 14.0803 16.4783 14.0644 16.4596C13.9647 16.35 13.8624 16.2423 13.7575 16.1366C12.1484 14.5146 10.0561 13.4822 7.81632 13.1799C8.10071 15.422 9.11648 17.5225 10.7256 19.1445C12.3347 20.7665 14.4271 21.799 16.6668 22.1012C16.404 20.0294 15.5167 18.0784 14.1137 16.5142ZM15.8179 8.81738C15.3567 10.8718 15.4615 13.0112 16.1189 15.0084C16.8766 15.8826 17.5074 16.8496 17.9994 17.8806C18.5046 16.8221 19.1528 15.838 19.9256 14.9559C20.5703 12.9656 20.6673 10.8366 20.204 8.79328C19.8222 7.10905 19.072 5.53649 18.0137 4.18582C16.9503 5.54301 16.1979 7.12417 15.8179 8.81738ZM21.9315 16.4628C21.9452 16.4485 21.9585 16.4339 21.9716 16.419C22.0599 16.3229 22.1501 16.2285 22.2421 16.1358C23.1959 15.1745 24.3298 14.4106 25.5788 13.8875C26.4146 13.5376 27.2911 13.3 28.1852 13.1796C28.0717 14.0747 27.841 14.9529 27.4975 15.7914C26.9841 17.0445 26.2289 18.1842 25.2751 19.1454C24.3213 20.1066 23.1874 20.8706 21.9384 21.3936C21.1026 21.7436 20.2261 21.9811 19.3319 22.1016C19.4455 21.2065 19.6762 20.3282 20.0197 19.4898C20.4761 18.3759 21.1234 17.3517 21.9315 16.4628Z"
                  fill="#FC4C02"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.0001 29.7202C12.6079 29.7202 7.36106 31.4687 3.04679 34.7033C2.49444 35.1174 1.71095 35.0054 1.29683 34.453C0.882704 33.9007 0.994758 33.1172 1.54711 32.7031C6.29407 29.144 12.0671 27.2202 18.0001 27.2202C23.9331 27.2202 29.7061 29.144 34.453 32.7031C35.0054 33.1172 35.1174 33.9007 34.7033 34.453C34.2892 35.0054 33.5057 35.1174 32.9534 34.7033C28.6391 31.4687 23.3923 29.7202 18.0001 29.7202Z"
                  fill="#FE9467"
                />
              </svg>
              <strong>Ecological</strong>
              <p>
                Outstanding green credentials with durable, sustainable
                stainless steel.
              </p>
            </div>
            <div className={styles.label}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.8039 6.50149L15.2978 6.50144L12.0767 10.7962L10.5311 6.50139L9.00219 6.50137L8.23997 7.51805L9.86707 12.0391H4.85049L4.34438 12.7141C4.23052 12.8661 4.17116 13.0521 4.17606 13.2419C4.18096 13.4318 4.24978 13.6145 4.37138 13.7604L4.37474 13.7644L5.0149 14.5391H10.7668L15.2046 26.8698L17.4038 29.531L17.4058 29.5335C17.4847 29.6269 17.5829 29.7021 17.6937 29.7538C17.8055 29.806 17.9273 29.833 18.0507 29.833C18.174 29.833 18.2958 29.806 18.4076 29.7538C18.5184 29.7021 18.6166 29.6269 18.6955 29.5335L18.6975 29.531L20.8968 26.8697L25.3339 14.5391H31.0864L31.7266 13.7644L31.7299 13.7604C31.8515 13.6145 31.9204 13.4318 31.9253 13.2419C31.9302 13.0521 31.8709 12.8661 31.7569 12.7141L31.2511 12.0391H26.2335L27.8615 7.51507L27.1021 6.50155L25.5692 6.50154L24.0242 10.7952L20.8039 6.50149ZM18.0509 6.99739L21.8321 12.0391H14.2696L18.0509 6.99739ZM13.4238 14.5391L18.0507 27.3953L22.677 14.5391H13.4238Z"
                  fill="#FE9467"
                />
                <path
                  d="M8.1939 4.01099C8.15648 4.0281 8.12026 4.04689 8.08529 4.06723C8.11712 4.05 8.14926 4.03328 8.18169 4.01706C8.18575 4.01503 8.18982 4.013 8.1939 4.01099Z"
                  fill="#FE9467"
                />
                <path
                  d="M1.67594 13.1875C1.67325 13.221 1.67188 13.2549 1.67188 13.2891C1.67188 13.3517 1.67649 13.4133 1.68539 13.4735C1.68118 13.418 1.67834 13.3623 1.67689 13.3064C1.67587 13.2667 1.67555 13.2271 1.67594 13.1875Z"
                  fill="#FE9467"
                />
                <path
                  d="M17.9374 32.3311C17.9676 32.3339 17.998 32.3356 18.0284 32.3361C18.0482 32.3364 18.068 32.3363 18.0878 32.3357C18.1134 32.335 18.1388 32.3334 18.1642 32.3311C18.1264 32.3324 18.0885 32.333 18.0507 32.333C18.0129 32.333 17.9751 32.3324 17.9374 32.3311Z"
                  fill="#FE9467"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.18169 4.01707C8.64598 3.78492 9.15796 3.66406 9.67706 3.66406H26.4271C26.9462 3.66406 27.4581 3.78492 27.9224 4.01707C28.3867 4.24922 28.7906 4.58628 29.1021 5.00156L33.7574 11.2147C34.2087 11.817 34.4438 12.5541 34.4244 13.3064C34.405 14.0579 34.133 14.7809 33.6523 15.3587L33.6504 15.361L20.6142 31.1362C20.3004 31.5109 19.9082 31.8123 19.4653 32.0191C19.0223 32.2259 18.5395 32.3331 18.0507 32.3331C17.5618 32.3331 17.079 32.2259 16.6361 32.0191C16.1932 31.8123 15.801 31.5109 15.4871 31.1361L15.4819 31.1299L2.45094 15.361L2.44906 15.3587C1.96833 14.7809 1.69629 14.0579 1.67689 13.3064C1.65748 12.554 1.8925 11.817 2.34394 11.2147L7.00192 5.00174C7.31338 4.58646 7.71739 4.24922 8.18169 4.01707ZM9.00219 6.50138L4.34438 12.7141C4.23052 12.8661 4.17116 13.0521 4.17606 13.2419C4.18096 13.4318 4.24978 13.6145 4.37138 13.7604L4.37474 13.7644L17.4038 29.531L17.4058 29.5335C17.4847 29.6269 17.5829 29.7021 17.6937 29.7538C17.8055 29.806 17.9273 29.8331 18.0507 29.8331C18.174 29.8331 18.2958 29.806 18.4076 29.7538C18.5184 29.7021 18.6166 29.6269 18.6955 29.5335L18.6975 29.531L31.7266 13.7644L31.7299 13.7604C31.8515 13.6145 31.9204 13.4318 31.9253 13.2419C31.9302 13.0521 31.8709 12.8661 31.7569 12.7141L27.1021 6.50156"
                  fill="#FC4C02"
                />
              </svg>
              <strong>Economical</strong>
              <p>
                High-quality and durable, made in Germany, and fully repairable.
              </p>
            </div>
            <div className={styles.label}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.54688 3.71638V32.3073C3.54688 32.3584 3.55135 32.3918 3.55552 32.4115C3.58658 32.4267 3.632 32.4403 3.68011 32.4483C3.69638 32.451 3.70903 32.4524 3.71638 32.4531H32.3073C32.3584 32.4531 32.3918 32.4486 32.4115 32.4445C32.4267 32.4134 32.4403 32.368 32.4483 32.3199C32.4506 32.3063 32.4519 32.2953 32.4527 32.2877C32.4529 32.2862 32.453 32.2848 32.4531 32.2836V3.69271C32.4531 3.64156 32.4486 3.60824 32.4445 3.58854C32.4134 3.57334 32.368 3.55969 32.3199 3.55168C32.3036 3.54897 32.291 3.54756 32.2836 3.54688H3.69271C3.64155 3.54688 3.60824 3.55134 3.58855 3.55551C3.57334 3.58657 3.5597 3.632 3.55168 3.68011C3.54897 3.69637 3.54756 3.70903 3.54688 3.71638ZM32.3073 2.29688V1.04688H3.69271C3.12502 1.04688 2.61615 1.19239 2.19237 1.47491C1.77641 1.75222 1.5147 2.11301 1.35332 2.43577C1.19438 2.75365 1.12115 3.05639 1.08569 3.26911C1.06747 3.37843 1.05788 3.47227 1.05278 3.54367C1.05021 3.57958 1.04874 3.61042 1.04791 3.63539C1.04749 3.64789 1.04723 3.65898 1.04708 3.66855L1.04692 3.68178L1.04689 3.68753L1.04688 3.69019L1.04688 3.69147C1.04688 3.69209 1.04688 3.69271 2.29615 3.69271H1.04688V32.3073C1.04688 32.875 1.19239 33.3839 1.47491 33.8076C1.75222 34.2236 2.11301 34.4853 2.43577 34.6467C2.75365 34.8056 3.05639 34.8789 3.26911 34.9143C3.37843 34.9325 3.47227 34.9421 3.54367 34.9472C3.57958 34.9498 3.61042 34.9513 3.63539 34.9521C3.64789 34.9525 3.65897 34.9528 3.66854 34.9529L3.68178 34.9531L3.68753 34.9531L3.69147 34.9531C3.69209 34.9531 3.69271 34.9531 3.69271 33.7031V34.9531H32.3073C32.875 34.9531 33.3839 34.8076 33.8076 34.5251C34.2236 34.2478 34.4853 33.887 34.6467 33.5642C34.8056 33.2464 34.8789 32.9436 34.9143 32.7309C34.9325 32.6216 34.9421 32.5277 34.9472 32.4563C34.9498 32.4204 34.9513 32.3896 34.9521 32.3646C34.9525 32.3521 34.9528 32.341 34.9529 32.3315L34.9531 32.3182L34.9531 32.3125L34.9531 32.3085C34.9531 32.3079 34.9531 32.3073 33.7031 32.3073H34.9531V3.69271C34.9531 3.12502 34.8076 2.61615 34.5251 2.19237C34.2478 1.77641 33.887 1.5147 33.5642 1.35332C33.2464 1.19438 32.9436 1.12115 32.7309 1.08569C32.6216 1.06747 32.5277 1.05788 32.4563 1.05278C32.4204 1.05021 32.3896 1.04874 32.3646 1.04791C32.3521 1.04749 32.341 1.04723 32.3315 1.04708L32.3182 1.04692L32.3125 1.04689L32.3098 1.04688L32.3085 1.04688C32.3079 1.04688 32.3073 1.04688 32.3073 2.29688Z"
                  fill="#FE9467"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.0011 7.73486C17.9543 7.73486 17.9085 7.74819 17.869 7.77329C17.8305 7.79777 17.7995 7.83246 17.7796 7.87347L14.8239 14.3327C14.6204 14.7774 14.1763 15.0625 13.6873 15.0625H7.94354C7.89826 15.0629 7.85413 15.0769 7.81683 15.1026C7.77919 15.1285 7.75027 15.1653 7.73386 15.2079C7.71746 15.2506 7.71432 15.2972 7.72488 15.3417C7.73481 15.3835 7.75642 15.4216 7.7871 15.4516L12.7601 19.7651C13.1674 20.1183 13.3023 20.6928 13.0948 21.1904L10.3311 27.8192C10.3274 27.828 10.3236 27.8368 10.3197 27.8455C10.2955 27.9002 10.289 27.961 10.3011 28.0195C10.3133 28.078 10.3435 28.1312 10.3876 28.1716C10.4316 28.2121 10.4872 28.2376 10.5465 28.2448C10.6024 28.2515 10.6589 28.2415 10.7089 28.2163L17.3669 24.3022C17.7579 24.0724 18.2428 24.0723 18.6338 24.3022L25.29 28.2144C25.3398 28.2388 25.3956 28.2483 25.4508 28.2415C25.51 28.2342 25.5654 28.2085 25.6093 28.1681C25.6532 28.1277 25.6833 28.0745 25.6953 28.0161C25.7074 27.9577 25.7009 27.897 25.6767 27.8425C25.6729 27.8338 25.6692 27.8251 25.6655 27.8164L22.9018 21.1876C22.6943 20.69 22.8292 20.1155 23.2365 19.7623L28.206 15.4519C28.2359 15.4218 28.257 15.384 28.2666 15.3426C28.2771 15.2979 28.2738 15.2511 28.2572 15.2083C28.2406 15.1655 28.2116 15.1287 28.1738 15.1027C28.1364 15.077 28.0922 15.063 28.0468 15.0625H22.3093C21.82 15.0625 21.3756 14.777 21.1723 14.3319L18.2225 7.87324C18.2026 7.83233 18.1717 7.79772 18.1332 7.77329C18.0937 7.74819 18.0479 7.73486 18.0011 7.73486ZM16.5282 5.66324C16.9685 5.38345 17.4794 5.23486 18.0011 5.23486C18.5228 5.23486 19.0337 5.38345 19.474 5.66324C19.9143 5.94303 20.2658 6.34244 20.4874 6.81473L20.4928 6.82632L23.1126 12.5625H28.0555C28.604 12.5648 29.1391 12.7323 29.591 13.0433C30.0429 13.3542 30.3905 13.7942 30.5886 14.3057C30.7866 14.8172 30.8259 15.3766 30.7012 15.9108C30.5765 16.445 30.2937 16.9292 29.8897 17.3002C29.881 17.3082 29.8722 17.316 29.8633 17.3238L25.5568 21.0591L27.9683 26.8432C28.1991 27.3714 28.2604 27.9584 28.1434 28.5231C28.0253 29.0932 27.7317 29.6119 27.3036 30.0064C26.8755 30.4009 26.3346 30.6514 25.7569 30.7227C25.1791 30.794 24.5936 30.6824 24.0825 30.4038C24.0707 30.3973 24.059 30.3907 24.0475 30.3839L18.0005 26.8298L11.9548 30.3839C11.9448 30.3898 11.9346 30.3956 11.9244 30.4012C11.4135 30.6826 10.8273 30.7965 10.2482 30.7269C9.66918 30.6573 9.12659 30.4077 8.69696 30.0133C8.26732 29.6189 7.97232 29.0996 7.85354 28.5287C7.73589 27.963 7.79704 27.375 8.0283 26.8459L10.4398 21.0619L6.13333 17.3266C6.12605 17.3202 6.11885 17.3139 6.11173 17.3074C5.70495 16.9377 5.41937 16.4538 5.29245 15.919C5.16553 15.3842 5.20318 14.8236 5.40047 14.3106C5.59776 13.7975 5.94548 13.3561 6.39802 13.0442C6.85057 12.7323 7.38682 12.5644 7.93646 12.5626L7.94062 12.5625L12.8846 12.5625L15.5147 6.8147C15.7363 6.34241 16.0879 5.94303 16.5282 5.66324Z"
                  fill="#FC4C02"
                />
              </svg>
              <strong>Functional</strong>
              <p>
                Easy to use with a unique grip, offering precise and excellent
                grinding results.
              </p>
            </div>
            <div className={styles.label}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.0057 10.75C18.696 10.7526 19.2535 11.3142 19.251 12.0045C19.251 12.0046 19.251 12.0048 19.251 12.0049C19.2382 15.2721 20.0265 17.6123 21.5159 19.1599C23.0026 20.7049 25.3897 21.6693 29.0282 21.7514C29.7138 21.7668 30.2589 22.3318 30.2499 23.0175C30.2409 23.7032 29.681 24.2536 28.9952 24.251C25.661 24.2383 23.3705 25.1219 21.8613 26.6606C20.3369 28.215 19.4209 30.6292 19.2495 34.0623C19.2158 34.7373 18.6518 35.2632 17.9762 35.2498C17.3005 35.2363 16.7579 34.6883 16.7511 34.0126C16.7183 30.7673 15.9757 28.3739 14.5153 26.7929C13.0748 25.2334 10.7317 24.2461 7.00165 24.251C6.31443 24.2519 5.75536 23.6979 5.75004 23.0107C5.74472 22.3235 6.29515 21.7609 6.9823 21.7512C10.3331 21.7037 12.7168 20.8738 14.2691 19.3744C15.8112 17.8848 16.7383 15.535 16.751 11.9955C16.751 11.9954 16.7511 11.9952 16.7511 11.9951C16.7538 11.3048 17.3155 10.7474 18.0057 10.75ZM17.9903 18.3856C17.4857 19.4489 16.8262 20.3802 16.006 21.1725C15.2433 21.9092 14.3667 22.5012 13.3903 22.9617C14.5426 23.4957 15.5301 24.207 16.3517 25.0965C17.0879 25.8935 17.6646 26.8054 18.103 27.8118C18.6088 26.7129 19.262 25.7406 20.0765 24.9102C20.8477 24.1238 21.7386 23.4899 22.7415 23.0022C21.5721 22.473 20.5605 21.7725 19.7145 20.8934C19.0042 20.1553 18.4337 19.3152 17.9903 18.3856Z"
                  fill="#FC4C02"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5011 0.602054C15.7208 0.602881 15.8981 0.781581 15.8973 1.00121C15.8973 1.00126 15.8973 1.0013 15.8973 1.00134C15.8933 2.0409 16.1441 2.7855 16.618 3.27793C17.091 3.76953 17.8506 4.07639 19.0083 4.10248C19.2264 4.1074 19.3999 4.28716 19.397 4.50535C19.3941 4.72354 19.216 4.89866 18.9978 4.89783C17.9369 4.8938 17.2081 5.17492 16.7279 5.66453C16.2428 6.15911 15.9514 6.92726 15.8969 8.01962C15.8861 8.23436 15.7067 8.40171 15.4917 8.39743C15.2767 8.39315 15.1041 8.2188 15.1019 8.00379C15.0915 6.97121 14.8552 6.20966 14.3905 5.7066C13.9322 5.21041 13.1866 4.89627 11.9998 4.89784C11.7812 4.89813 11.6033 4.72184 11.6016 4.50319C11.5999 4.28453 11.775 4.10552 11.9937 4.10242C13.0598 4.08733 13.8183 3.82326 14.3122 3.34617C14.8028 2.87223 15.0978 2.12454 15.1019 0.998341C15.1019 0.998301 15.1019 0.99826 15.1019 0.99822C15.1028 0.778587 15.2815 0.601227 15.5011 0.602054ZM15.4962 3.03155C15.3356 3.36987 15.1258 3.6662 14.8648 3.9183C14.6221 4.15272 14.3433 4.34107 14.0326 4.48758C14.3992 4.65751 14.7134 4.88382 14.9748 5.16686C15.2091 5.42044 15.3926 5.7106 15.5321 6.03079C15.693 5.68117 15.9009 5.37178 16.16 5.10755C16.4054 4.85735 16.6888 4.65566 17.0079 4.50048C16.6359 4.3321 16.314 4.10922 16.0448 3.8295C15.8188 3.59464 15.6373 3.32733 15.4962 3.03155Z"
                  fill="#FE9467"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.50287 5.375C7.84801 5.3763 8.12676 5.65712 8.12552 6.00226C8.12552 6.00232 8.12552 6.00239 8.12552 6.00245C8.11912 7.63605 8.51326 8.80613 9.25793 9.57996C10.0013 10.3525 11.1949 10.8347 13.0141 10.8757C13.3569 10.8834 13.6295 11.1659 13.6249 11.5088C13.6204 11.8516 13.3405 12.1268 12.9976 12.1255C11.3305 12.1192 10.1852 12.5609 9.43067 13.3303C8.66844 14.1075 8.21047 15.3146 8.12474 17.0312C8.10789 17.3686 7.82589 17.6316 7.48808 17.6249C7.15027 17.6182 6.87896 17.3442 6.87555 17.0063C6.85917 15.3837 6.48786 14.187 5.75765 13.3964C5.0374 12.6167 3.86584 12.1231 2.00083 12.1255C1.65721 12.126 1.37768 11.849 1.37502 11.5054C1.37236 11.1618 1.64757 10.8804 1.99115 10.8756C3.66654 10.8519 4.8584 10.4369 5.63456 9.68718C6.40559 8.94242 6.86913 7.76749 6.87552 5.99774C6.87552 5.99768 6.87553 5.99762 6.87553 5.99755C6.87688 5.65241 7.15774 5.37371 7.50287 5.375ZM7.49515 9.19278C7.24284 9.72443 6.91312 10.1901 6.503 10.5862C6.12163 10.9546 5.68337 11.2506 5.19514 11.4808C5.77129 11.7479 6.26503 12.1035 6.67586 12.5483C7.04395 12.9468 7.33228 13.4027 7.5515 13.9059C7.80442 13.3565 8.13102 12.8703 8.53824 12.4551C8.92384 12.0619 9.36928 11.745 9.87075 11.5011C9.28604 11.2365 8.78023 10.8863 8.35724 10.4467C8.00208 10.0776 7.71685 9.65758 7.49515 9.19278Z"
                  fill="#FE9467"
                />
              </svg>
              <strong>Aesthetical</strong>
              <p>
                Timeless, clean design with no fussy details, instantly
                re-cognizable for its high quality.
              </p>
            </div>
          </div>
        </Row>
      </Table>
    </>
  );
}
