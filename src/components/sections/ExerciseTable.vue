<template>
    <section>
        <div class="block">
            <b-icon
                icon="account"
                size="is-small">
            </b-icon>
            <b-icon
                icon="home"
                size="is-small">
            </b-icon>
            <b-icon
                icon="view-dashboard"
                size="is-small">
            </b-icon>
        </div>

        <div class="block">
            <b-icon icon="account"></b-icon>
            <b-icon icon="home"></b-icon>
            <b-icon icon="view-dashboard"></b-icon>
        </div>

        <div class="block">
            <b-icon
                icon="account"
                size="is-medium">
            </b-icon>
            <b-icon
                icon="home"
                size="is-medium">
            </b-icon>
            <b-icon
                icon="view-dashboard"
                size="is-medium">
            </b-icon>
        </div>

        <div class="block">
            <b-icon
                icon="account"
                size="is-large"
                type="is-success">
            </b-icon>
            <b-icon
                icon="home"
                size="is-large"
                type="is-info">
            </b-icon>
            <b-icon
                icon="view-dashboard"
                size="is-large"
                type="is-primary">
            </b-icon>
        </div>

        <button class="button is-dark">
            <b-icon icon="check"></b-icon>
            <span>Finish</span>
        </button>

        <button class="button is-warning">
            <b-icon icon="check"></b-icon>
            <span>Finish</span>
        </button>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                    { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                    { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                    { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                    { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
                ],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'first_name',
                        label: 'First Name',
                    },
                    {
                        field: 'last_name',
                        label: 'Last Name',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
                    }
                ]
            }
        }
    }
</script>
