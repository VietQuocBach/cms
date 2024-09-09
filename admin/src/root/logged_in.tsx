interface Props {
    children: React.ReactNode
}

function LoggedIn({ children }: Props) {
    return <>{children}</>
}

export default LoggedIn