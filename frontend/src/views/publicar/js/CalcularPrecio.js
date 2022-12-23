import Axios from 'axios';

export const getPosts = async (estate, unit, operation) => {
    
    const params = {
        estate: estate,
        unit: unit,
        operation: operation,
    }

    const url = `http://localhost:4000/api/house/get/${JSON.stringify(params)}`;

    try {
        const { data } = await Axios.get(url);
        return data;

    } catch (error) {
        console.log(error.response.data.message);
        return [];
    }
}

export const isOportunidadesSuitable = (posts, price, coveredSurface) => {

    let pricePerSurface = price / coveredSurface;

    let minPrice = Number.MAX_VALUE;
    let maxPrice = 0;

    posts.map((post) => {
        let pricePerSurface = post.dataBasic.price / post.surface.covered;

        // Asigna el precio minimo
        if (pricePerSurface < minPrice)
            minPrice = pricePerSurface;

        // Asigna el precio máximo
        if (pricePerSurface > maxPrice)
            maxPrice = pricePerSurface;
    });

    let averagePrice = (minPrice + maxPrice) / 2;

    return pricePerSurface <= (75 * averagePrice / 100);
}