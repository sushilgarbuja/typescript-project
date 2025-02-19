'use client'

const PreviewButton = ({ filelink }: { filelink: string }) => {
    const handlePreview = () => {
        window.open(filelink, '_blank')
    }
    return (
        <div>
            <button onClick={handlePreview} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Preview Button
            </button>
        </div>
    )
}

export default PreviewButton
