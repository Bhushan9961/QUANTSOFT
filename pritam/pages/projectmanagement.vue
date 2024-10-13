<template>
    <div>
        <section class="wrapper">
            <div class="container pb-3">
                <div class="row text-center">
                    <div class="col-lg-12 mx-auto">
                      <div class="position-relative mt-9" data-aos="fade-up">                           
                        <img class="rounded image-full" style="z-index: 0.5; width: 100%; height: 80vh; object-fit:cover;" src="../assets/new-img/consultancy.jpg"/>
                    </div>
                    </div> 
                </div>
            </div>
        </section>
        <section class="wrapper">
            <div class="container pb-9 pt-3 mt-8">
                <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                    <div class="col-lg-12">
                        <h3 class="display-5 mb-5 text-center" data-aos="fade-up">Project <span class="underline-3 style-2 yellow">Management Consultancy.</span> </h3>
                        <p class="fs-20 mb-0" data-aos="fade-left">We provide quantity estimation for all types of Real estate, Infrastructure, Industrial and commercial projects for our esteemed clients in India as well as abroad.</p>
                        <p class="fs-20 mb-0" data-aos="fade-right">We provide estimation for different stages of constructions like conceptual pre-launch, detailed pre-contract / tender estimate, post-contract/GFC estimate based on the client</p>
                        <p class="fs-20 mb-0" data-aos="fade-left">Our Reports include quantities from Earth Work up to Lock and Key, it includes quantification for all the civil, structural, architectural, mechanical and electrical services.</p>
                        
                       
                    </div>
                </div>
            </div>
        </section>
    
       
    </div>
</template>

<script>
    import AOS from 'aos';
    export default{
        name: 'meditation',
        data(){
            return {

            }
        },
        mounted(){
            AOS.refresh();
        }
    }

</script>

<style scoped>
.accordion-item .arrow-icon {
    margin-left: auto;
    transition: transform 0.3s ease;
}

.accordion-item .collapsed .arrow-icon i {
    transform: rotate(180deg); /* Point up when collapsed */
}

.accordion-item .accordion-collapse.show .arrow-icon i {
    transform: rotate(0deg); /* Point down when open */
}

</style>