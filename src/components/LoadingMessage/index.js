function LoadingMessage({ isLoading })
{
    if (isLoading) {
        return (
            <span className="badge bg-info text-wrap">Cargando lista de imágenes...</span>
        )
    }
}

export default LoadingMessage;