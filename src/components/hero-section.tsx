"use client";

import { useState, useRef } from "react";
import "./ai-builder.css";

const HeroSection = () => {
  const [value, setValue] = useState("");
  const [validationVisible, setValidationVisible] = useState(false);
  const [maxLengthVisible, setMaxLengthVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setValue(val);
    if (val.trim().length >= 10) {
      setValidationVisible(false);
    }
    if (val.trim().length > 0) {
      wrapperRef.current?.classList.add("has-value");
    } else {
      wrapperRef.current?.classList.remove("has-value");
    }
  };

  const handleSubmit = () => {
    const input = value.trim();
    if (input.length < 10) {
      setValidationVisible(true);
      setMaxLengthVisible(false);
      return;
    }
    if (value.length > 2000) {
      setMaxLengthVisible(true);
      setValidationVisible(false);
      return;
    }
    const data = JSON.stringify({ initial_description: input });
    const encoded = encodeURIComponent(data);
    const fullUrl = `https://dashboard.sitenow.tech/sign-up?generate-website=1&prefilledAiData=${encoded}&builderType=wvc`;
    window.location.href = fullUrl;
  };

  return (
    <section
      id="hero"
      className="section-hero min-h-screen flex flex-col items-center justify-center pt-16 pb-12 relative overflow-hidden"
    >
      <div className="glow-blob w-[500px] h-[500px] bg-glow-primary top-[10%] left-[15%] animate-pulse-glow" />
      <div
        className="glow-blob w-[400px] h-[400px] bg-glow-accent bottom-[15%] right-[10%] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-6 animate-slide-up">
          Bring your{" "}
          <span className="gradient-text">ideas</span>
          <br />
          to life.
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Create live, full-stack websites by chatting with AI.
        </p>

        <div
          className="max-w-2xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="ai-builder">
            <div className="ai-builder-wrapper" ref={wrapperRef}>
              <textarea
                className="ai-builder-textarea"
                placeholder="Describe your idea in a few words..."
                value={value}
                onChange={handleInput}
              />
              <svg
                className="ai-builder-submit-svg"
                onClick={handleSubmit}
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z"
                  fill="white"
                  fillOpacity="0.4"
                />
                <rect width="36" height="36" rx="18" fill="#14151F" fillOpacity="0.5" />
                <path
                  d="M18.0916 10.2549C18.0932 10.255 18.0948 10.2547 18.0964 10.2549C18.1162 10.2568 18.1356 10.2607 18.155 10.2637C18.1704 10.266 18.1857 10.2684 18.2009 10.2715C18.254 10.2821 18.3054 10.2972 18.3552 10.3154C18.3696 10.3207 18.384 10.3261 18.3982 10.332C18.4524 10.3546 18.5043 10.3813 18.5535 10.4121C18.5613 10.417 18.5692 10.4216 18.5769 10.4268C18.5915 10.4364 18.6049 10.4477 18.6189 10.458C18.6604 10.4887 18.7014 10.5221 18.739 10.5596L24.1238 15.9248C24.5372 16.3371 24.5388 17.0072 24.1267 17.4209C23.7145 17.8344 23.0444 17.8347 22.6306 17.4229L19.0505 13.8545V24.6934C19.0503 25.2771 18.5767 25.7507 17.9929 25.751C17.4089 25.751 16.9356 25.2773 16.9353 24.6934V13.8594L13.3728 17.4219C12.9597 17.8346 12.2897 17.8348 11.8767 17.4219C11.4638 17.0089 11.464 16.3388 11.8767 15.9258L17.2419 10.5605C17.3518 10.4507 17.4804 10.3708 17.6169 10.3193C17.6376 10.3115 17.6582 10.3034 17.6794 10.2969C17.8132 10.2559 17.9534 10.2417 18.0916 10.2549Z"
                  fill="white"
                  fillOpacity="0.4"
                />
              </svg>
              <button className="ai-builder-submit-btn" onClick={handleSubmit}>
                Generate
              </button>
              {validationVisible && (
                <p
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    fontSize: "0.75rem",
                    color: "red",
                    margin: "8px 0 0",
                  }}
                >
                  To get better results input no less than 10 symbols.
                </p>
              )}
              {maxLengthVisible && (
                <p
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    fontSize: "0.75rem",
                    color: "red",
                    margin: "8px 0 0",
                  }}
                >
                  Character limit reached.
                </p>
              )}
            </div>
            <div
              className="ai-builder-features"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                marginTop: "32px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0 }}
                >
                  <g clipPath="url(#wp)">
                    <path d="M8.99687 0.113281C4.09188 0.113281 0.109375 4.09578 0.109375 9.00078C0.109375 13.9058 4.09188 17.8883 8.99687 17.8883C13.9019 17.8883 17.8844 13.9058 17.8844 9.00078C17.8844 4.09578 13.9019 0.113281 8.99687 0.113281ZM1.00937 9.00078C1.00937 7.84203 1.25687 6.73953 1.70687 5.74953L5.52063 16.1895C2.84312 14.8958 1.00937 12.162 1.00937 9.00078ZM8.99687 16.9883C8.20938 16.9883 7.45563 16.8758 6.73562 16.662L9.13187 9.69828L11.5844 16.4258C11.5844 16.4258 11.6181 16.5045 11.6406 16.5383C10.8081 16.8308 9.91937 16.9883 8.98563 16.9883H8.99687ZM10.0994 5.25453C10.5831 5.23203 11.0106 5.17578 11.0106 5.17578C11.4381 5.11953 11.3931 4.48953 10.9544 4.51203C10.9544 4.51203 9.66063 4.61328 8.82812 4.61328C8.04063 4.61328 6.72438 4.51203 6.72438 4.51203C6.29688 4.48953 6.24062 5.14203 6.66813 5.17578C6.66813 5.17578 7.07313 5.23203 7.50063 5.25453L8.74938 8.66328L7.00563 13.9058L4.09188 5.25453C4.57563 5.23203 5.00312 5.17578 5.00312 5.17578C5.43062 5.11953 5.38563 4.48953 4.94688 4.51203C4.94688 4.51203 3.65313 4.61328 2.82063 4.61328C2.67438 4.61328 2.49437 4.61328 2.30312 4.61328C3.75437 2.44203 6.20687 1.01328 8.99687 1.01328C11.0781 1.01328 12.9681 1.81203 14.3969 3.10578C14.3631 3.10578 14.3294 3.10578 14.2956 3.10578C13.5081 3.10578 12.9569 3.79203 12.9569 4.52328C12.9569 5.18703 13.3394 5.73828 13.7444 6.40203C14.0481 6.93078 14.4081 7.61703 14.4081 8.60703C14.4081 9.29328 14.1494 10.0808 13.8006 11.1945L13.0019 13.8608L10.1106 5.26578L10.0994 5.25453ZM16.0056 5.16453C16.6244 6.30078 16.9844 7.60578 16.9844 9.00078C16.9844 11.9483 15.3869 14.5245 13.0131 15.9083L15.4544 8.85453C15.9156 7.71828 16.0619 6.80703 16.0619 5.99703C16.0619 5.70453 16.0394 5.43453 16.0056 5.17578V5.16453Z" />
                  </g>
                  <defs>
                    <clipPath id="wp">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                WordPress backend
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0 }}
                >
                  <g clipPath="url(#domain)">
                    <mask
                      id="mask0"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="18"
                      height="18"
                    >
                      <path d="M18 0H0V18H18V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0)">
                      <path d="M3.86719 14.3887C4.17785 14.3887 4.42969 14.1368 4.42969 13.8262C4.42969 13.5155 4.17785 13.2637 3.86719 13.2637C3.55653 13.2637 3.30469 13.5155 3.30469 13.8262C3.30469 14.1368 3.55653 14.3887 3.86719 14.3887Z" />
                      <path d="M6.11719 14.3887C6.42785 14.3887 6.67969 14.1368 6.67969 13.8262C6.67969 13.5155 6.42785 13.2637 6.11719 13.2637C5.80653 13.2637 5.55469 13.5155 5.55469 13.8262C5.55469 14.1368 5.80653 14.3887 6.11719 14.3887Z" />
                      <path d="M3.86719 8.5293C4.17785 8.5293 4.42969 8.27746 4.42969 7.9668C4.42969 7.65614 4.17785 7.4043 3.86719 7.4043C3.55653 7.4043 3.30469 7.65614 3.30469 7.9668C3.30469 8.27746 3.55653 8.5293 3.86719 8.5293Z" />
                      <path d="M6.11719 8.5293C6.42785 8.5293 6.67969 8.27746 6.67969 7.9668C6.67969 7.65614 6.42785 7.4043 6.11719 7.4043C5.80653 7.4043 5.55469 7.65614 5.55469 7.9668C5.55469 8.27746 5.80653 8.5293 6.11719 8.5293Z" />
                      <path d="M17.9784 9.20336V6.71711C17.9784 6.13211 17.7534 5.59211 17.3822 5.18711H17.3934L14.6147 1.04711C14.4347 0.788359 14.1422 0.630859 13.8272 0.630859H4.19719C3.88219 0.630859 3.57844 0.788359 3.39844 1.05836L0.630937 5.18711C0.259687 5.59211 0.0234375 6.13211 0.0234375 6.72836V9.21461C0.0234375 9.87836 0.315937 10.4859 0.765937 10.9021C0.304688 11.3184 0.0234375 11.9259 0.0234375 12.5896V15.0646C0.0234375 16.3359 1.05844 17.3709 2.32969 17.3709H15.6722C16.9434 17.3709 17.9784 16.3359 17.9784 15.0646V12.5896C17.9784 11.9259 17.6859 11.3184 17.2359 10.9021C17.6972 10.4859 17.9784 9.87836 17.9784 9.21461V9.20336ZM4.34344 1.86836H13.6697L15.3797 4.42211H2.63344L4.34344 1.86836ZM16.7409 12.5784V15.0534C16.7409 15.6384 16.2572 16.1221 15.6722 16.1221H2.32969C1.74469 16.1221 1.26094 15.6384 1.26094 15.0534V12.5784C1.26094 11.9934 1.74469 11.5096 2.32969 11.5096H15.6722C16.2572 11.5096 16.7409 11.9934 16.7409 12.5784ZM2.32969 10.2721C1.74469 10.2721 1.26094 9.78836 1.26094 9.20336V6.71711C1.26094 6.13211 1.74469 5.64836 2.32969 5.64836H15.6722C16.2572 5.64836 16.7409 6.13211 16.7409 6.71711V9.20336C16.7409 9.78836 16.2572 10.2721 15.6722 10.2721H2.32969Z" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="domain">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Instant hosting &amp; domain
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0 }}
                >
                  <g clipPath="url(#code)">
                    <path d="M7.71802 16.2681C7.68427 16.2681 7.63927 16.2681 7.60552 16.2569C7.26802 16.1894 7.05427 15.8631 7.11052 15.5369L9.67552 2.2394C9.74302 1.9019 10.0693 1.6769 10.3955 1.7444C10.733 1.8119 10.9468 2.13815 10.8905 2.4644L8.32552 15.7731C8.26927 16.0656 8.01052 16.2681 7.71802 16.2681Z" />
                    <path d="M13.03 13.9176C12.8725 13.9176 12.715 13.8613 12.5912 13.7376C12.355 13.5013 12.355 13.1076 12.5912 12.8601L16.45 9.00133L12.6025 5.14258C12.3663 4.90633 12.3663 4.51258 12.6025 4.26508C12.8388 4.02883 13.2325 4.02883 13.48 4.26508L17.7775 8.56258C17.89 8.67508 17.9575 8.83258 17.9575 9.00133C17.9575 9.17008 17.89 9.32758 17.7775 9.44008L13.48 13.7376C13.3562 13.8501 13.1875 13.9176 13.03 13.9176Z" />
                    <path d="M4.97594 13.918C4.81844 13.918 4.66094 13.8618 4.53719 13.738L0.239688 9.44055C0.0034375 9.19305 0.0034375 8.81055 0.239688 8.56305L4.53719 4.2768C4.77344 4.04055 5.16719 4.04055 5.41469 4.2768C5.65094 4.51305 5.65094 4.9068 5.41469 5.1543L1.55594 9.0018L5.41469 12.8605C5.65094 13.0968 5.65094 13.4905 5.41469 13.738C5.29094 13.8505 5.13344 13.918 4.97594 13.918Z" />
                  </g>
                  <defs>
                    <clipPath id="code">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Zero coding required
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0 }}
                >
                  <g clipPath="url(#cart)">
                    <path d="M6.75 16.5C7.16421 16.5 7.5 16.1642 7.5 15.75C7.5 15.3358 7.16421 15 6.75 15C6.33579 15 6 15.3358 6 15.75C6 16.1642 6.33579 16.5 6.75 16.5Z" />
                    <path d="M14.25 16.5C14.6642 16.5 15 16.1642 15 15.75C15 15.3358 14.6642 15 14.25 15C13.8358 15 13.5 15.3358 13.5 15.75C13.5 16.1642 13.8358 16.5 14.25 16.5Z" />
                    <path d="M1.5 1.5H3.75L5.76 10.7925C5.82858 11.1156 6.00574 11.4044 6.26115 11.6117C6.51656 11.819 6.83459 11.9317 7.1625 11.93H13.8375C14.1654 11.9317 14.4834 11.819 14.7389 11.6117C14.9943 11.4044 15.1714 11.1156 15.24 10.7925L16.5 4.5H4.5" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="cart">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                E-commerce ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
