<template>
  <div class="search-card">
    <fa icon="search" class="search-card__icon" />
    <input
      class="search-card__input"
      placeholder="Search..."
      v-model="searchProject"
    />
  </div>
  <div class="wrapper">
    <div
      class="projects-card"
      :style="{ width: detailsProject ? 950 + 'px' : 1350 + 'px' }"
    >
      <h3 class="projects-card__title">All Projects</h3>
      <CardProject
        v-for="cardProject in searchResultProjects"
        :key="cardProject.id"
        :dataProject="cardProject"
        @projectInfo="infoProject"
      />
    </div>
    <div class="detailsProject" v-if="detailsProject">
      <div class="card">
        <div class="card__header">
          <h3 class="projects-card__title">Project Details</h3>
          <div class="button" @click="closeDetailProject">
            <fa class="button__icon" icon="rotate-right" />
            <a class="button__close">Close</a>
          </div>
        </div>
        <div v-if="!errorProject">
          <img
            v-if="aboutProject.image"
            :src="require(`../assets/img/${aboutProject.image}`)"
          />
          <h3 class="card__title">{{ aboutProject.title }}</h3>
          <p>{{ aboutProject.date }}</p>
          <div>tut info</div>
        </div>
        <div v-if="errorProject" class="card__error">
          <h3 class="card__error-title">Unable to Load Data</h3>
          <img src="../assets/img/errorDataProject.png" />
          <p>Will work on this section soon</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardProject from "@/components/cardInfo/CardProject.vue";
import ProjectModel from "@/models/ProjectModel";

export default defineComponent({
  name: "ProjectsView",
  components: { CardProject },
  data() {
    return {
      searchProject: "",
      errorProject: false,
      dataProjects: [
        {
          id: 1,
          title: "Go debate",
          badgeInfo: "Android Developer",
          college: "GTBIT College - Android",
          date: "feb 2016",
          buttonLink: "",
          image: "projectsPlaceholder.png",
          backgroundColor: "rgba(61, 219, 134, 0.2)",
          colorText: "#3DDB86",
        },
        {
          id: 2,
          title: "Gates ‘16",
          badgeInfo: "Android Developer",
          college: "GTBIT College - Android",
          date: "feb 2016",
          buttonLink: "",
          image: "projectsPlaceholder.png",
          backgroundColor: "rgba(61, 219, 134, 0.2)",
          colorText: "#3DDB86",
        },
        {
          id: 3,
          title: "Vice President -PR",
          badgeInfo: "Public Relations",
          college: "Toastmasters of Delhi",
          date: "apr 2016",
          buttonLink: "",
          image: "toastmaster.png",
          backgroundColor: "rgba(56, 25, 244, 0.2)",
          colorText: "#3819F4",
        },
        {
          id: 4,
          title: "Digiduck",
          badgeInfo: "Designer",
          college: "Digiduck Agencies",
          date: "apr 2016",
          buttonLink: "",
          image: "digiduck.png",
          backgroundColor: "rgba(108, 189, 6, 0.2)",
          colorText: "#6CBD06",
        },
        {
          id: 5,
          title: "Graphics",
          badgeInfo: "Graphic Designer",
          college: "Alvisan",
          date: "apr 2016",
          buttonLink: "",
          image: "graphics.png",
          backgroundColor: "rgba(67, 118, 78, 0.2)",
          colorText: "#43764E",
        },
        {
          id: 6,
          title: "Sambandh App",
          badgeInfo: "Android Developer",
          college: "SI Innovative",
          date: "apr 2016",
          buttonLink: "",
          image: "sambandh.png",
          backgroundColor: "rgba(61, 219, 134, 0.2)",
          colorText: "#3DDB86",
        },
        {
          id: 7,
          title: "1Book App",
          badgeInfo: "Tech Consultant",
          college: "1 book Technologies",
          date: "apr 2016",
          buttonLink: "",
          image: "1book.png",
          backgroundColor: "rgba(255, 102, 0, 0.2)",
          colorText: "#FF6600",
        },
        {
          id: 8,
          title: "Smart India Hackathon",
          badgeInfo: "Android Developer",
          college: "India level Hackathon",
          date: "apr 2016",
          buttonLink: "",
          image: "smartIndia.png",
          backgroundColor: "rgba(61, 219, 134, 0.2)",
          colorText: "#3DDB86",
        },
      ] as ProjectModel[],
      aboutProject: {} as ProjectModel,
      detailsProject: false,
    };
  },
  computed: {
    searchResultProjects(): ProjectModel[] {
      const project = this.searchProject.toLowerCase();
      return this.dataProjects.filter((item: ProjectModel) => {
        return item.title.toLowerCase().includes(project);
      });
    },
  },
  methods: {
    /**
     * Передает проект в переменную aboutProject
     *
     * @param dataProject - выбранный проет
     */
    infoProject(dataProject: object): void {
      this.detailsProject = true;
      this.aboutProject = dataProject as ProjectModel;
    },
    /**
     * Закрывает окно и очищает переменную aboutProject
     */
    closeDetailProject(): void {
      this.detailsProject = false;
      this.aboutProject = {} as ProjectModel;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins";
.wrapper {
  display: flex;
  margin: 20px 24px;
}

.card {
  position: fixed;
  width: 470px;
  min-height: 747px;
  background: #ffffff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  margin: 0 0 0 24px;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-family: $poppins-font;
  }
  &__error {
    @include descriptionText;
    font-size: 14px;
    font-weight: 600;
  }
  &__error-title {
    color: #f0646f;
    font-family: $poppins-font;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.5px;
  }
}

.projects-card {
  transition: 0.6s ease;
  width: 1350px;
  min-height: 747px;
  background: #fff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  &__title {
    @include fontTitle;
    text-align: left;
    padding: 16px 16px;
  }
}
.button {
  @include descriptionText;
  color: #1657ff;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.5px;
  margin: 0 16px;
  cursor: pointer;
  &__icon {
    margin: 0 10px;
  }
}
.detailsProject {
  width: 550px;
  min-height: 740px;
  position: relative;
}
.search-card {
  margin: 30px 24px;
  position: relative;
  width: 250px;
  &__icon {
    color: #c2c9d1;
    position: absolute;
    top: 12px;
    left: 10px;
  }
  &__input {
    outline: none;
    width: 250px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #c2c9d1;
    padding: 10px 0 10px 30px;
    font-family: $poppins-font;
    color: rgba(0, 0, 0, 0.5);
    &:before {
    }
  }
}
</style>
