import Head from 'next/head'
import { faTwitter, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SupportTable from '../components/support-table';
import { CopyBlock,dracula } from "react-code-blocks"
import {CopyIcon} from '@bitcoin-design/bitcoin-icons-react/filled';

export default function Home() {
  const sampleAddress = "bc1pmnhwnlcx7w4lfv3txuez6hfup24wkr4yygzugekpmttplx2mnkusw03aln"
  
  let copied = false
  
  const copyAddress = () => {
    copied = false
    let copyText = document.getElementById("sample-address")
    copyText.select()
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    copied = true;
    // this.timerHold = true;
    setTimeout(()=>{
      copied = false;
    }, 4000);
  }

  return (
    <div>
      <Head>
        <title>When taproot? | Bitcoin Bech32m Adoption Tracking</title>
        <meta name="description" content="Taproot has been live since November 2021, yet the bitcoin industry has not seen widespread adoption of
              bech32m. What gives? Bunny is sad. When&nbsp;taproot?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <a href="#start-of-main-content" className="sr-only skip-content">Skip to content</a>
      
      <nav role="navigation">
        
      </nav>

      <main>
        <a href="#start-of-main-content" id="start-of-main-content" className="sr-only">Start of main content</a>
        {/* Hero */}
        <div className="wtr-bg min-h-[80vh] flex items-center justify-center p-8 md:p-16">
          <div className="bg-white p-8 rounded-3xl drop-shadow-hard max-w-2xl">
            <div className="hero pb-8 mx-auto md:scale-125">
              <div className="flex flex-wrap">
                <img src="hero-bunny.svg" alt="" width="221" height="231" className="basis-[60%] w-[60%] md:order-first md:basis-[20%] md:w-[20%]" />
                <img src="hero-title.svg" alt="" width="758" height="231" className="order-last md:order-[1] md:basis-[67%] md:w-[67%]" />
                <img src="hero-carrot.svg" alt="" width="144" height="231" className="basis-[40%] w-[40%] md:order-last md:basis-[13%] md:w-[13%]" />
              </div>
            </div>
            <h1 className="sr-only">When taproot?</h1>
            <p className="text-xl xl:text-2xl mb-8">
              Taproot has been live since November 2021, but there is not widespread adoption in wallets and users
              aren’t yet experiencing the benefits. What gives? Bunny is sad. <strong>When&nbsp;taproot?</strong>
            </p>
            <p className="text-xl xl:text-2xl">
              The next step is for wallets and services to support <strong>sending to bech32m addresses.</strong>
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="container mx-auto p-8">
          <h2 className="text-center text-4xl">Benefits of taproot</h2>
          <div className="space-y-8 md:flex md:flex-wrap md:space-y-0">
            <div className="md:basis-1/2 md:p-8 xl:basis-1/4">
              <div className="w-32 h-32 bg-slate-400 rounded-full mx-auto mb-4"></div>
              <h3 className="mb-4 text-center">Lighter, more private multisig</h3>
              <p>
                Using key aggregation, you can get multi-sig security with the footprint of single-sig. Furthermore, these
                outputs will look the same as single-sig outputs!
              </p>
            </div>
            <div className="md:basis-1/2 md:p-8 xl:basis-1/4">
              <div className="w-32 h-32 bg-slate-400 rounded-full mx-auto mb-4"></div>
              <h3 className="mb-4 text-center">Cheaper inputs, more expensive outputs</h3>
              <p>
                P2TR outputs offer better aligned incentives. Receiving and stacking in P2TR is cheaper to spend later!
              </p>
            </div>
            <div className="md:basis-1/2 md:p-8 xl:basis-1/4">
              <div className="w-32 h-32 bg-slate-400 rounded-full mx-auto mb-4"></div>
              <h3 className="mb-4 text-center">More powerful single-sig</h3>
              <p>
                Use wallet descriptors to add fallback spending conditions to your single-sig outputs.
              </p>
            </div>
            <div className="md:basis-1/2 md:p-8 xl:basis-1/4">
              <div className="w-32 h-32 bg-slate-400 rounded-full mx-auto mb-4"></div>
              <h3 className="mb-4 text-center">Improved privacy on Lightning</h3>
              <p>
                Collaborative lightning channel  closes will be indistinguishable from single-sig outputs
              </p>
            </div>
          </div>
          
          <p className="font-display mb-4 mt-16 text-2xl text-center max-w-3xl mx-auto md:text-3xl lg:text-4xl">
            When we wait to adopt P2TR, we slow down adoption of all these great benefits
          </p>
        </div>

        {/*Instructions */}
        <div className="container mx-auto px-8 py-8">
          <div className="container mx-auto p-8 max-w-2xl">
            <h2>How to add bech32m send support</h2>
            
            <p>
              Unpacking <code>bech32m</code> addresses is straightforward. <code>Bech32m</code> addresses differ from <code>bech32</code> addresses only in the
              checksum. <a href="https://github.com/jesseposner/bech32/commit/cc1cc2cc501f7da51305cbf43eef3f6258892cdb#diff-f226c2590ba87b0b57a874d7eecacac232f0d39a7896c08cf6167c258b0b31a1L132-L143">This two-line code change</a> adds support for decoding <code>bech32m</code> addresses to the <a href="https://github.com/sipa/bech32/">Python reference
              implementation of <code>bech32</code></a>.
            </p>
          </div>
          
          <div className="instructions max-w-4xl mx-auto">
            <picture className="mx-auto block">
              <source
                srcSet="bech32m-code-diff.png 1x, bech32m-code-diff@2x.png 2x"
                type="image/png"
                media="(min-width: 768px)"
              />
              <img src="bech32m-code-diff-mobile.png" alt="Graphic showing the code changes for adding bech32m support" className="mx-auto block" />
            </picture>
          </div>

          <div className="container mx-auto p-8 max-w-2xl">
            <p>
              Of course, then you'll also need to make sure your frontend interface accepts the new address type and that
              your transaction building creates outputs with witness version 1. Comprehensive test vectors can be found in <a href="https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki">BIP350</a>.
            </p>
          </div>
        </div>

        {/* Support table */}
        <div className="mx-auto p-8">
          <h2 className="text-center md:text-4xl xl:text-5xl 2xl:text-6xl">
            The state of taproot support
          </h2>

          <SupportTable />
        </div>

        {/* Get Involved */}
        <div className="container mx-auto p-8 max-w-[1600px] flex flex-col lg:flex-row">
          <div className="lg:basis-3/5 lg:w-3/5">
            <h2>Get Involved</h2>

            <p>
              You can help push the industry forward by testing wallets and other services for bech32m and P2TR support.
              Just follow these steps:
            </p>

            <ol className="list-decimal space-y-8 marker:font-display marker:text-2xl px-4 my-8">
              <li className="pl-4">
                Select a wallet, exchange, or other bitcoin service. Choose one that has not already been tested in the
                above list.
              </li>
              <li className="pl-4">
                Try sending a small amount of bitcoin to a bech32m address. There is an example QR code of a bech32m
                address shown here. By scanning it, you can see if the software recognizes bech32m.
                But <strong>do not</strong> actually send to this address because you will not get your bitcoin back.
              </li>
              <li className="pl-4">
                Now try receiving to a bech32m address. When you choose to receive, check if it presents you with an
                address that begins with “bc1p”. If it does not, then this software does not support bech32m.
              </li>
              <li className="pl-4">
                Once you've finished your test, you can send us your results
                by <a href="https://github.com/sbddesign/bech32m-adoption/issues">opening an issue</a>,
                opening a PR to <a href="https://github.com/sbddesign/bech32m-adoption/blob/main/data/formatted/all.json">edit the this website</a>,
                or mentioning it to us in <a href="https://bitcoindesign.slack.com/archives/C03ND8N72PL">Slack</a>.
              </li>
            </ol>
          </div>
          <div className="pb-8 lg:basis-2/5 lg:w-2/5 text-center pl-8">
            <h3>Sample Address</h3>
            <img src="bech32m-qr.png" alt="A QR code of a bech32m bitcoin address" className="w-80 mx-auto block" />
            <div className="flex flex-row justify-center">
              <input type="text" className="text-xs font-mono p-4 border solid rounded-md w-80" value={sampleAddress} id="sample-address" readOnly />
              <button title="Copy Sample Address" className="p-2" onClick={copyAddress}>
                <CopyIcon className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mx-auto wtr-bg px-8 py-16 flex items-center justify-center lg:min-h-[50vh]">
          <div className="bg-white px-8 py-12 rounded-3xl drop-shadow-hard max-w-2xl">
            <div className="footer-img md:w-2/5 mx-auto">
              <svg width="338" height="315" viewBox="0 0 338 315" fill="none" role="img" xmlns="http://www.w3.org/2000/svg">
                <title>Bunny happily eating a carrot</title>
                <path d="M52.4332 165.08C60.3027 126.355 79.1868 110.676 99.5938 105.913C124.86 100.016 138.853 102.899 158.533 121.361C200.06 160.322 187.124 235.09 132.706 247.79C78.2869 260.491 44.5636 203.806 52.4332 165.08Z" fill="#C8E8F2"/>
                <path d="M123.068 183.859C121.025 186.235 117.68 187.016 114.797 185.79V185.79C108.391 183.067 109.198 173.741 115.977 172.16V172.16C122.755 170.578 127.606 178.582 123.068 183.859V183.859Z" fill="#7B6C63"/>
                <ellipse rx="10.2282" ry="13.2219" transform="matrix(-0.99951 -0.0313119 -0.0313119 0.99951 131.458 147.091)" fill="#7B6C63"/>
                <circle cx="134.213" cy="141.638" r="3.74204" transform="rotate(-13.1367 134.213 141.638)" fill="white"/>
                <circle cx="137.558" cy="148.287" r="1.49682" transform="rotate(-13.1367 137.558 148.287)" fill="white"/>
                <ellipse cx="91.1292" cy="156.503" rx="10.2282" ry="13.2219" transform="rotate(-28.0678 91.1292 156.503)" fill="#7B6C63"/>
                <circle r="3.74204" transform="matrix(-0.97383 0.227276 0.227276 0.97383 86.2435 152.834)" fill="white"/>
                <circle r="1.49682" transform="matrix(-0.97383 0.227276 0.227276 0.97383 86.1872 160.276)" fill="white"/>
                <path d="M97.4808 196.915C96.1597 195.915 94.2782 196.176 93.2782 197.497C92.2783 198.818 92.5387 200.7 93.8598 201.699L97.4808 196.915ZM116.053 185.779C116.268 186.836 116.411 189.203 116.102 191.944C115.794 194.684 115.078 197.405 113.86 199.365C112.714 201.208 111.252 202.231 109.144 202.266C106.774 202.305 103.028 201.113 97.4808 196.915L93.8598 201.699C99.825 206.214 104.897 208.337 109.243 208.265C113.85 208.189 117.001 205.676 118.956 202.532C120.837 199.505 121.708 195.788 122.065 192.614C122.422 189.44 122.306 186.416 121.932 184.58L116.053 185.779Z" fill="#7B6C63"/>
                <path d="M144.198 187.415C145.191 186.09 147.072 185.82 148.398 186.814C149.723 187.808 149.993 189.688 148.999 191.014L144.198 187.415ZM122.136 184.358C122.432 185.482 123.22 187.505 124.483 189.581C125.753 191.669 127.35 193.556 129.147 194.69C130.841 195.758 132.7 196.168 134.919 195.436C137.291 194.654 140.427 192.447 144.198 187.415L148.999 191.014C144.859 196.538 140.807 199.812 136.799 201.134C132.639 202.507 128.929 201.645 125.947 199.765C123.069 197.95 120.886 195.214 119.357 192.7C117.82 190.174 116.79 187.618 116.334 185.886L122.136 184.358Z" fill="#7B6C63"/>
                <path d="M22.425 36.0697C53.9704 15.6431 79.3216 82.9992 88.054 119.231L76.7431 127.09C45.4931 105.261 -9.12045 56.4964 22.425 36.0697Z" fill="#C8E8F2"/>
                <path d="M34.5387 48.7496C51.0052 36.1587 71.3802 79.9462 80.7022 106.591C81.4732 108.795 80.6359 111.216 78.7035 112.526C76.8199 113.803 74.3346 113.727 72.5739 112.285C51.3673 94.9211 18.0707 61.3416 34.5387 48.7496Z" fill="#F1D0CC"/>
                <path d="M139.733 8.69235C102.405 4.33971 109.488 75.9593 117.696 112.313L131.317 114.353C149.676 80.9466 177.062 13.045 139.733 8.69235Z" fill="#C8E8F2"/>
                <path d="M134.485 25.4247C114.146 21.4236 115.259 69.7065 118.694 97.7254C118.978 100.043 120.801 101.843 123.114 102.162C125.368 102.474 127.562 101.305 128.503 99.2328C139.833 74.2755 154.825 29.4262 134.485 25.4247Z" fill="#F1D0CC"/>
                <path d="M280.092 142.126C267.983 151.067 264.193 166.249 263.812 172.722L269.108 176.966C269.47 175.276 272.57 168.819 282.07 156.507C291.57 144.196 310.168 144.674 318.279 146.453C310.596 141.285 292.201 133.185 280.092 142.126Z" fill="#469264"/>
                <path d="M295.886 178.487C288.258 170.154 271 175.493 262.723 179.06L259.575 172.214C263.824 168.517 283.901 155.03 298.922 170.343C308.428 180.035 306.227 193.589 295.66 201.133C298.736 198.936 303.693 187.015 295.886 178.487Z" fill="#23B25C"/>
                <path d="M305.872 167.218C295.83 158.069 277.285 170.362 269.268 177.653L263.011 171.099C266.398 165.234 283.958 142.049 307.024 153.592C321.622 160.896 320.865 181.498 310.503 189.756C313.143 186.055 315.913 176.367 305.872 167.218Z" fill="#209B51"/>
                <path d="M251.065 141.093C260.508 145.272 257.644 161.94 255.032 169.752L261.508 172.093C264.549 167.939 275.29 148.617 260.189 136.114C250.632 128.2 236.536 135.044 233.97 144.783C235.734 141.812 241.623 136.915 251.065 141.093Z" fill="#209B51"/>
                <path d="M264.786 133.621C274.77 142.834 264.126 162.373 257.556 170.991L264.626 176.657C270.177 172.775 291.756 153.277 278.262 131.295C269.722 117.384 249.264 119.919 241.933 130.956C245.391 128.006 254.803 124.409 264.786 133.621Z" fill="#23B25C"/>
                <path d="M265.163 170.524C250.869 159.069 225.826 168.867 214.61 184.785C212.722 187.464 209.986 191.83 206.795 197.265C212.385 200.456 220.799 207.902 209.737 212.157C214.346 215.348 221.119 223.539 211.332 230.772C213.283 236.445 213.779 246.302 200.164 240.345C198.72 246.373 193.447 254.918 183.904 240.877C174.929 260.268 168.803 277.818 173.276 281.402C182.959 289.162 249.203 236.74 261.489 222.354C273.775 207.968 279.458 181.98 265.163 170.524Z" fill="#F76421"/>
                <path d="M213.347 258.489C190.053 274.957 179.431 278.342 176.17 278.421C197.1 264.904 228.068 239.491 247.16 215.667C262.188 196.916 265.081 183.752 265.714 174.247C274.688 184.468 268.332 206.888 260.756 216.971C253.18 227.054 242.465 237.904 213.347 258.489Z" fill="#D5622D"/>
                <path d="M244.929 173.201C241.372 171.069 228.833 177.34 230.844 181.489C232.856 185.638 253.432 178.299 244.929 173.201Z" fill="#FF7B3F"/>
                <path d="M226.474 181.741C224.269 181.298 219.006 186.78 220.787 188.533C222.569 190.286 231.742 182.798 226.474 181.741Z" fill="#FF7B3F"/>
                <path d="M177.5 216.5L174 208L182.5 210.5L177.5 216.5Z" fill="#F76421"/>
                <path d="M176 229V222L180.5 223L178.5 228.5L176 229Z" fill="#F76421"/>
              </svg>
            </div>

            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl">Join the discussion</h2>

            <ul className="text-xl space-y-8 text-center md:flex items-center justify-center md:space-y-0 md:space-x-16 lg:text-2xl">
              <li>
                <a href="https://bitcoindesign.slack.com/archives/C03ND8N72PL" className="flex items-center justify-center space-x-4">
                  <FontAwesomeIcon icon={faSlack} className="w-8 h-8" />
                  <span>Slack <span className="sr-only xl:not-sr-only">Channel</span></span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/WhenTaproot" className="flex items-center justify-center space-x-4">
                  <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/sbddesign/bech32m-adoption" className="flex items-center justify-center space-x-4">
                  <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
