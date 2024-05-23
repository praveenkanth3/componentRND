<template>
    <div class="card-section" tabindex="0" @click="() => onClickCard(movieDetail)">
        <img :src="movieDetail.imageurl[0]" :alt="movieDetail.title"/>
        <div>{{ movieDetail.title }}</div>
        <div>Languages: {{ movieDetail.language.join(',') || 'N/A' }}</div>
        <div>
            <div>IMDB: {{ movieDetail.imdbrating || 'N/A' }}</div>
        </div>

    </div>

</template>

<script>
export default {

    name: 'CardComponent',

    props: {
        movieDetail: {
            type: Object,
            required: true
        },

        onClickCard: {
            type: Function,
            required: true
        }

    }
}

</script>

<style> 

.card-section {
    width: 265.833px;
    height: 326px;
    background-color: white;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
}

</style>