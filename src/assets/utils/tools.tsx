export const redirect = (link: string | undefined) => {
    if (!link) return null;

    window.open(link, "_blank")
}