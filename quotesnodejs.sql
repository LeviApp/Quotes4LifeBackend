--
-- PostgreSQL database dump
--

-- Dumped from database version 13.7 (Ubuntu 13.7-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: heroku_ext; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA heroku_ext;


ALTER SCHEMA heroku_ext OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: knex_migrations; Type: TABLE; Schema: public; Owner: werarmwkofecyk
--

CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


ALTER TABLE public.knex_migrations OWNER TO werarmwkofecyk;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: werarmwkofecyk
--

CREATE SEQUENCE public.knex_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.knex_migrations_id_seq OWNER TO werarmwkofecyk;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: werarmwkofecyk
--

ALTER SEQUENCE public.knex_migrations_id_seq OWNED BY public.knex_migrations.id;


--
-- Name: knex_migrations_lock; Type: TABLE; Schema: public; Owner: werarmwkofecyk
--

CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);


ALTER TABLE public.knex_migrations_lock OWNER TO werarmwkofecyk;

--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE; Schema: public; Owner: werarmwkofecyk
--

CREATE SEQUENCE public.knex_migrations_lock_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.knex_migrations_lock_index_seq OWNER TO werarmwkofecyk;

--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: werarmwkofecyk
--

ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNED BY public.knex_migrations_lock.index;


--
-- Name: quotes; Type: TABLE; Schema: public; Owner: werarmwkofecyk
--

CREATE TABLE public.quotes (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    text_body character varying(255) NOT NULL,
    img_url character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.quotes OWNER TO werarmwkofecyk;

--
-- Name: quotes_id_seq; Type: SEQUENCE; Schema: public; Owner: werarmwkofecyk
--

CREATE SEQUENCE public.quotes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.quotes_id_seq OWNER TO werarmwkofecyk;

--
-- Name: quotes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: werarmwkofecyk
--

ALTER SEQUENCE public.quotes_id_seq OWNED BY public.quotes.id;


--
-- Name: knex_migrations id; Type: DEFAULT; Schema: public; Owner: werarmwkofecyk
--

ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);


--
-- Name: knex_migrations_lock index; Type: DEFAULT; Schema: public; Owner: werarmwkofecyk
--

ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);


--
-- Name: quotes id; Type: DEFAULT; Schema: public; Owner: werarmwkofecyk
--

ALTER TABLE ONLY public.quotes ALTER COLUMN id SET DEFAULT nextval('public.quotes_id_seq'::regclass);


--
-- Data for Name: knex_migrations; Type: TABLE DATA; Schema: public; Owner: werarmwkofecyk
--

COPY public.knex_migrations (id, name, batch, migration_time) FROM stdin;
1	20210325210444_init.js	1	2021-04-23 04:59:05.286+00
\.


--
-- Data for Name: knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: werarmwkofecyk
--

COPY public.knex_migrations_lock (index, is_locked) FROM stdin;
1	0
\.


--
-- Data for Name: quotes; Type: TABLE DATA; Schema: public; Owner: werarmwkofecyk
--

COPY public.quotes (id, title, text_body, img_url, created_at, updated_at) FROM stdin;
2	Nelson Mandela	Resentment is like drinking poison and then hoping it will kill your enemies.	https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/1200px-Nelson_Mandela_1994.jpg	2021-04-23 22:36:55.458219+00	2021-04-23 22:36:55.458219+00
3	Frank Sinatra	Don’t hide your scars. They make you who you are.	https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Frank_Sinatra_%281957_studio_portrait_close-up%29.jpg/1200px-Frank_Sinatra_%281957_studio_portrait_close-up%29.jpg	2021-04-23 23:50:35.16922+00	2021-04-23 23:50:35.16922+00
4	Helen Keller	Keep your face to the sunshine and you cannot see the shadows.	https://cdn.britannica.com/72/142272-050-12F9270F/Helen-Keller-1904.jpg	2021-04-24 01:06:52.62912+00	2021-04-24 01:06:52.62912+00
\.


--
-- Name: knex_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: werarmwkofecyk
--

SELECT pg_catalog.setval('public.knex_migrations_id_seq', 1, true);


--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE SET; Schema: public; Owner: werarmwkofecyk
--

SELECT pg_catalog.setval('public.knex_migrations_lock_index_seq', 1, true);


--
-- Name: quotes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: werarmwkofecyk
--

SELECT pg_catalog.setval('public.quotes_id_seq', 14, true);


--
-- Name: knex_migrations_lock knex_migrations_lock_pkey; Type: CONSTRAINT; Schema: public; Owner: werarmwkofecyk
--

ALTER TABLE ONLY public.knex_migrations_lock
    ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);


--
-- Name: knex_migrations knex_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: werarmwkofecyk
--

ALTER TABLE ONLY public.knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);


--
-- Name: quotes quotes_pkey; Type: CONSTRAINT; Schema: public; Owner: werarmwkofecyk
--

ALTER TABLE ONLY public.quotes
    ADD CONSTRAINT quotes_pkey PRIMARY KEY (id);


--
-- Name: SCHEMA heroku_ext; Type: ACL; Schema: -; Owner: postgres
--

GRANT USAGE ON SCHEMA heroku_ext TO werarmwkofecyk WITH GRANT OPTION;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: werarmwkofecyk
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO werarmwkofecyk;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO werarmwkofecyk;


--
-- PostgreSQL database dump complete
--

