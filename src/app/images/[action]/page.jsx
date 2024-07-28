import Image from "next/image";


export default function EditUserPage({ params }) {
    const { action } = params;

    return (
        <div className="flex items-center justify-center">
            <Image 
                src={`/vestidos/${action}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                height: 'auto',
                width: 'auto',
                maxHeight: '100%',
                maxWidth: '100%'
                }}
                alt={action}
                className="shadow-white-md"
            />
        </div>
    );
}
  