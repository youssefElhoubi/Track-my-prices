export function ShoppingBagIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
        </svg>
    )
}

export function EnvelopeIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
        </svg>
    )
}

export function EyeIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    )
}

export function EyeSlashIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
        </svg>
    )
}


export function Loading({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={className}>
            <radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#FFFFFF"></stop><stop offset=".3" stop-color="#FFFFFF" stop-opacity=".9"></stop><stop offset=".6" stop-color="#FFFFFF" stop-opacity=".6"></stop><stop offset=".8" stop-color="#FFFFFF" stop-opacity=".3"></stop><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a12)" stroke-width="15" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#FFFFFF" stroke-width="15" stroke-linecap="round" cx="100" cy="100" r="70">
            </circle></svg>
    )
}
export function UserIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    )
}

export function MailIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
    )
}



export function EyeOffIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
    )
}

export function GoogleIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
            <path
                d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                fill="#4285F4"
            />
            <path
                d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                fill="#4285F4"
            />
            <path
                d="M5.047,14.588C4.615,13.787,4.376,12.871,4.376,12s0.239-1.787,0.671-2.588L2.158,6.824C1.436,8.382,1.028,10.141,1.028,12s0.408,3.618,1.13,5.176L5.047,14.588z"
                fill="#34A853"
            />
            <path
                d="M12.545,19.791c-2.209,0-4.078-0.724-5.464-1.942L4.192,20.738C6.146,22.794,9.179,24,12.545,24c3.461,0,6.369-1.255,8.479-3.406l-2.939-2.277C16.869,19.327,14.941,19.791,12.545,19.791z"
                fill="#EA4335"
            />
            <path
                d="M24.001,12c0-0.66-0.057-1.308-0.164-1.938l-0.063-0.374H12.545v3.821h6.992c-0.298,1.379-1.14,2.562-2.258,3.342l2.939,2.277C22.314,17.138,24.001,14.305,24.001,12z"
                fill="#FBBC05"
            />
        </svg>
    )
}

export function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
            <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
        </svg>
    )
}

export function Loadingnew({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={className}>
            <radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)">
                <stop offset="0" stopColor="#FFFFFF"></stop>
                <stop offset=".3" stopColor="#FFFFFF" stopOpacity=".9"></stop>
                <stop offset=".6" stopColor="#FFFFFF" stopOpacity=".6"></stop>
                <stop offset=".8" stopColor="#FFFFFF" stopOpacity=".3"></stop>
                <stop offset="1" stopColor="#FFFFFF" stopOpacity="0"></stop>
            </radialGradient>
            <circle
                transform-origin="center"
                fill="none"
                stroke="url(#a12)"
                strokeWidth="15"
                strokeLinecap="round"
                strokeDasharray="200 1000"
                strokeDashoffset="0"
                cx="100"
                cy="100"
                r="70"
            >
                <animateTransform
                    type="rotate"
                    attributeName="transform"
                    calcMode="spline"
                    dur="2"
                    values="360;0"
                    keyTimes="0;1"
                    keySplines="0 0 1 1"
                    repeatCount="indefinite"
                ></animateTransform>
            </circle>
            <circle
                transform-origin="center"
                fill="none"
                opacity=".2"
                stroke="#FFFFFF"
                strokeWidth="15"
                strokeLinecap="round"
                cx="100"
                cy="100"
                r="70"
            ></circle>
        </svg>
    )
}
export function Thunder({ className }: { className?: string }) {
    return (
        <svg fill="#ffffff"
            version="1.1"
            id="Capa_1"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 482.21 482.21"
            // xml:space="preserve"
            stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <g>
                <g>
                    <path d="M389.149,210.959l-0.594,0.01c-13.325,0.478-29.849,0.962-46.515,1.444c-15.568,0.457-31.26,0.922-44.595,1.384 c7.673-33.763,22.552-67.311,36.968-99.828c13.051-29.419,26.538-59.844,34.51-90.096l0.163-0.594 c0.076-0.264,0.147-0.531,0.218-0.78c2.92-3.806,3.555-8.584,1.646-13.073C368.588,3.88,362.774,0,356.802,0 c-3.493,0-6.814,1.274-9.592,3.691c-28.549,24.783-49.028,45.329-66.278,66.466c-49.68,56.594-107.071,114.303-175.438,176.409 c-0.317,0.284-0.571,0.568-0.516,0.568c-4.44,3.961-5.989,10.812-3.763,16.661c2.125,5.591,7.061,8.932,13.195,8.932 c26.956,0,55.535,0.057,84.401,0.671c-37.638,75.789-74.598,133.967-115.973,182.604c-3.101,3.646-4.233,8.136-3.225,12.686 c0.833,7.616,6.718,13.522,13.561,13.522c2.772,0,5.555-0.98,8.046-2.834c98.614-73.428,202.654-152.532,295.368-241.166 c0.665-0.632,1.265-1.315,1.813-2.069c4.225-4.044,5.717-10.668,3.595-16.374C399.956,214.25,395.152,210.959,389.149,210.959z M234.561,266.319c2.265-4.723,1.991-9.922-0.749-14.279c-2.829-4.488-7.919-7.394-12.974-7.394c-0.681,0-1.358,0.051-2.019,0.152 c-23.603-0.738-46.715-0.982-67.332-1.081c54.441-50.62,101.511-98.417,143.628-145.814c1.061-0.784,1.97-1.663,2.762-2.671 c0.894-1.15,1.823-2.275,2.742-3.387l2.885-3.375c0.513-0.566,0.919-1.155,1.305-1.747c5.027-6.018,10.364-12.022,16.092-18.091 c-4.402,10.936-9.013,21.896-13.543,32.639c-16.482,39.162-33.534,79.651-41.304,120.813c-0.102,0.559-0.162,1.104-0.208,1.63 c-1.706,4.517-1.26,9.786,1.233,13.721c2.473,3.89,6.662,6.122,11.507,6.122l0.614-0.018c12.091-0.447,27.817-0.889,43.473-1.331 c9.588-0.274,19.149-0.541,27.838-0.81c-63.968,58.739-131.573,112.408-188.172,155.678 C186.98,359.104,210.76,316.033,234.561,266.319z"></path>
                </g>
            </g>
            </g>
        </svg>
    )
}
export function Facebook({ className }: { className?: string }) {
    return (
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M15.75 12C15.75 15.875 12.9062 19.0938 9.1875 19.6562V14.25H11L11.3438 12H9.1875V10.5625C9.1875 9.9375 9.5 9.34375 10.4688 9.34375H11.4375V7.4375C11.4375 7.4375 10.5625 7.28125 9.6875 7.28125C7.9375 7.28125 6.78125 8.375 6.78125 10.3125V12H4.8125V14.25H6.78125V19.6562C3.0625 19.0938 0.25 15.875 0.25 12C0.25 7.71875 3.71875 4.25 8 4.25C12.2812 4.25 15.75 7.71875 15.75 12Z" fill="#9CA3AF" />
        </svg>
    )
}
export function Twitter({ className }: { className?: string }) {
    return (
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M14.3438 8.75C14.3438 8.90625 14.3438 9.03125 14.3438 9.1875C14.3438 13.5312 11.0625 18.5 5.03125 18.5C3.15625 18.5 1.4375 17.9688 0 17.0312C0.25 17.0625 0.5 17.0938 0.78125 17.0938C2.3125 17.0938 3.71875 16.5625 4.84375 15.6875C3.40625 15.6562 2.1875 14.7188 1.78125 13.4062C2 13.4375 2.1875 13.4688 2.40625 13.4688C2.6875 13.4688 3 13.4062 3.25 13.3438C1.75 13.0312 0.625 11.7188 0.625 10.125V10.0938C1.0625 10.3438 1.59375 10.4688 2.125 10.5C1.21875 9.90625 0.65625 8.90625 0.65625 7.78125C0.65625 7.15625 0.8125 6.59375 1.09375 6.125C2.71875 8.09375 5.15625 9.40625 7.875 9.5625C7.8125 9.3125 7.78125 9.0625 7.78125 8.8125C7.78125 7 9.25 5.53125 11.0625 5.53125C12 5.53125 12.8438 5.90625 13.4688 6.5625C14.1875 6.40625 14.9062 6.125 15.5312 5.75C15.2812 6.53125 14.7812 7.15625 14.0938 7.5625C14.75 7.5 15.4062 7.3125 15.9688 7.0625C15.5312 7.71875 14.9688 8.28125 14.3438 8.75Z" fill="#9CA3AF" />
        </svg>

    )
}
export function Instagram({ className }: { className?: string }) {
    return (
        <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M8 8.40625C9.96875 8.40625 11.5938 10.0312 11.5938 12C11.5938 14 9.96875 15.5938 8 15.5938C6 15.5938 4.40625 14 4.40625 12C4.40625 10.0312 6 8.40625 8 8.40625ZM8 14.3438C9.28125 14.3438 10.3125 13.3125 10.3125 12C10.3125 10.7188 9.28125 9.6875 8 9.6875C6.6875 9.6875 5.65625 10.7188 5.65625 12C5.65625 13.3125 6.71875 14.3438 8 14.3438ZM12.5625 8.28125C12.5625 8.75 12.1875 9.125 11.7188 9.125C11.25 9.125 10.875 8.75 10.875 8.28125C10.875 7.8125 11.25 7.4375 11.7188 7.4375C12.1875 7.4375 12.5625 7.8125 12.5625 8.28125ZM14.9375 9.125C15 10.2812 15 13.75 14.9375 14.9062C14.875 16.0312 14.625 17 13.8125 17.8438C13 18.6562 12 18.9062 10.875 18.9688C9.71875 19.0312 6.25 19.0312 5.09375 18.9688C3.96875 18.9062 3 18.6562 2.15625 17.8438C1.34375 17 1.09375 16.0312 1.03125 14.9062C0.96875 13.75 0.96875 10.2812 1.03125 9.125C1.09375 8 1.34375 7 2.15625 6.1875C3 5.375 3.96875 5.125 5.09375 5.0625C6.25 5 9.71875 5 10.875 5.0625C12 5.125 13 5.375 13.8125 6.1875C14.625 7 14.875 8 14.9375 9.125ZM13.4375 16.125C13.8125 15.2188 13.7188 13.0312 13.7188 12C13.7188 11 13.8125 8.8125 13.4375 7.875C13.1875 7.28125 12.7188 6.78125 12.125 6.5625C11.1875 6.1875 9 6.28125 8 6.28125C6.96875 6.28125 4.78125 6.1875 3.875 6.5625C3.25 6.8125 2.78125 7.28125 2.53125 7.875C2.15625 8.8125 2.25 11 2.25 12C2.25 13.0312 2.15625 15.2188 2.53125 16.125C2.78125 16.75 3.25 17.2188 3.875 17.4688C4.78125 17.8438 6.96875 17.75 8 17.75C9 17.75 11.1875 17.8438 12.125 17.4688C12.7188 17.2188 13.2188 16.75 13.4375 16.125Z" fill="#9CA3AF" />
        </svg>
    )
}

