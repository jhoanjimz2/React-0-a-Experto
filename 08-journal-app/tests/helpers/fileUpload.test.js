import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
    cloud_name: 'dqqjt6aay',
    api_key: '463896511253372',
    api_secret: 'AdaPGoIcIL7_HKssKOoaJMNQ7U8',
    secure: true
})

describe('Pruebas en File Upload', () => {

    test('Debe de subir el archivo correctamente a cloudinary', async() => {

        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNJy-MfTZkUzijE44HRLYP-OxeVZVt7odLA&usqp=CAU';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'tekashi.jpg');

        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg','');

        const cloudResp = await cloudinary.api.delete_resources([ 'journal-app/' + imageId ], {
            resource_type: 'image'
        });
        // console.log(cloudResp);

    })

    test('Debe de retornal null', async() => {

        const file = new File([], 'tekashi.jpg');

        const url = await fileUpload( file );
        expect( url ).toBe(null);

    })

})